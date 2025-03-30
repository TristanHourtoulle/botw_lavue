"use client"
import { Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense } from 'react'
import { useEffect, useState } from 'react'
import { type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshPhysicalMaterial } from 'three'
import { Environment } from '@react-three/drei'

const Model = ({xpos, ypos, zpos, xrot, yrot, zrot, scale}: {xpos: number, ypos: number, zpos:number, xrot: number, yrot: number, zrot:number, scale:number}) => {
    const [model, setModel] = useState<GLTF | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const loader = new GLTFLoader()
        const gltfPath = '/perfume/chanelperfume1.gltf'
        const binPath = '/perfume/chanelperfume1.bin'

        console.log('Vérification des fichiers...')

        Promise.all([
            fetch(gltfPath),
            fetch(binPath)
        ]).then(([gltfResponse, binResponse]) => {
            if (!gltfResponse.ok) {
                throw new Error(`Le fichier GLTF n'existe pas (${gltfResponse.status})`)
            }
            if (!binResponse.ok) {
                throw new Error(`Le fichier BIN n'existe pas (${binResponse.status})`)
            }
            console.log('Les deux fichiers existent!')

            loader.load(
                gltfPath,
                (gltf) => {
                    console.log('Modèle chargé avec succès')

                    gltf.scene.traverse((child: any) => {
                        if (child.isMesh) {
                            console.log('Material properties for', child.name, ':', child.material)

                            if (child.name.toLowerCase().includes('cube')) {
                                const glassMaterial = new MeshPhysicalMaterial({
                                    color: '#efefef',
                                    transmission: 1,
                                    roughness: 0.35,
                                    thickness: 500,
                                    envMapIntensity: 1,
                                    transparent: true
                                })

                                child.material = glassMaterial
                            }
                        }
                    })

                    setModel(gltf)
                    setLoading(false)
                },
                (progress) => {
                    const percent = (progress.loaded / progress.total * 100)
                    console.log('Progression:', percent.toFixed(2) + '%')
                },
                (error) => {
                    console.error('Erreur de chargement:', error)
                    setError(error.message)
                    setLoading(false)
                }
            )
        }).catch(error => {
            console.error('Erreur lors de la vérification des fichiers:', error)
            setError(error.message)
        })
    }, [])

    if (error) {
        return (
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="red" />
                {console.error('Erreur:', error)}
            </mesh>
        )
    }

    if (loading) {
        return (
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        )
    }

    if (!model) return null

    return (
        <primitive
            object={model.scene}
            scale={[scale, scale, scale]}
            position={[xpos, ypos, zpos]}
            rotation={[xrot, yrot, zrot]}
        />
    )
}

const PerfumeSceneOrbital = ({xpos, ypos, zpos, xrot, yrot, zrot}: {xpos: number, ypos: number, zpos:number, xrot: number, yrot: number, zrot:number}) => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'auto'
        }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                style={{
                    background: 'transparent',
                    position: 'absolute',
                    top: 0,
                    left: 0
                }}
                gl={{
                    alpha: true,
                    antialias: true,
                    toneMapping: 'ACESFilmicToneMapping',
                    outputEncoding: 'sRGB',
                    preserveDrawingBuffer: true,
                    physicallyCorrectLights: true
                }}
            >
                <Suspense fallback={
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="blue" />
                    </mesh>
                }>
                    <Environment preset="studio" intensity={1.5} />
                    <ambientLight intensity={2} />
                    <directionalLight position={[-10, 4, 0]} intensity={2} />
                    <directionalLight position={[10, 4, 0]} intensity={2} />
                    <Model scale={0.3} xpos={xpos} ypos={ypos} zpos={zpos} xrot={xrot} yrot={yrot} zrot={zrot}/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export {PerfumeSceneOrbital, Model};
