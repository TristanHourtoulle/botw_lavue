"use client"
import { Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense } from 'react'
import { useEffect, useState } from 'react'
import { type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshPhysicalMaterial, Object3D, Mesh, MeshStandardMaterial } from 'three'
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

                    gltf.scene.traverse((child: Object3D) => {
                        if (child instanceof Mesh) {
                            console.log('Mesh trouvé:', child.name);
                            console.log('Position du mesh:', child.position);
                            console.log('Scale du mesh:', child.scale);

                            if (child.name.toLowerCase() === 'cube') {
                                console.log('Application du matériau verre au cube extérieur');
                                const glassMaterial = new MeshPhysicalMaterial({
                                    color: '#ffffff',
                                    transmission: 0.9,
                                    roughness: 0,
                                    thickness: 0.5,
                                    transparent: true,
                                    envMapIntensity: 0.2,
                                    clearcoat: 0,
                                    clearcoatRoughness: 0,
                                    side: 2
                                });
                                child.material = glassMaterial;
                                child.renderOrder = 1;
                            }
                            else if (child.name.toLowerCase() === 'interior_cube') {
                                console.log('Application du matériau liquide au cube intérieur');
                                const liquidMaterial = new MeshStandardMaterial({
                                    color: '#ff0000',
                                    transparent: false,
                                    roughness: 0.2,
                                    metalness: 0.8,
                                    emissive: '#ff0000',
                                    emissiveIntensity: 0.2,
                                });

                                if (child.geometry) {
                                    child.geometry.computeVertexNormals();
                                    console.log('Normales recalculées pour le cube intérieur');
                                }

                                child.visible = true;
                                child.renderOrder = 2;
                                child.material = liquidMaterial;

                                console.log('Position du cube intérieur:', child.position);
                                console.log('Échelle du cube intérieur:', child.scale);
                                console.log('Matériau appliqué:', liquidMaterial);
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
                    preserveDrawingBuffer: true,
                }}
            >
                <Suspense fallback={
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="blue" />
                    </mesh>
                }>
                    <Environment preset="studio" environmentIntensity={0.5}/>
                    <ambientLight intensity={1} />
                    <directionalLight position={[5, 5, 5]} intensity={1} />
                    <directionalLight position={[-5, -5, -5]} intensity={0.5} />
                    <pointLight position={[0, 0, 5]} intensity={1} />
                    <Model scale={0.3} xpos={xpos} ypos={ypos} zpos={zpos} xrot={xrot} yrot={yrot} zrot={zrot}/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export {PerfumeSceneOrbital, Model};
