"use client"
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import { useEffect, useState } from 'react'

const Model = () => {
    const [model, setModel] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loader = new GLTFLoader()
        console.log('Début du chargement du modèle...')
        loader.load(
            '/sauvage_perfume.glb',
            (gltf) => {
                console.log('Modèle chargé avec succès:', gltf)
                console.log('Contenu du modèle:', gltf.scene)
                setModel(gltf)
                setLoading(false)
            },
            (progress) => {
                console.log('Progression du chargement:', (progress.loaded / progress.total * 100) + '%')
            },
            (error) => {
                console.error('Erreur de chargement du modèle:', error)
                setLoading(false)
            }
        )
    }, [])

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
            scale={[10, 10, 10]}
            position={[0, 0, 0]}
            rotation={[0, Math.PI, 0]}
        />
    )
}

const PerfumeScene = () => {
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            pointerEvents: 'auto' // Réactive les interactions avec le canvas
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
                    antialias: true
                }}
            >
                <Suspense fallback={
                    <mesh>
                        <boxGeometry args={[1, 1, 1]} />
                        <meshStandardMaterial color="blue" />
                    </mesh>
                }>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} intensity={2} />
                    <directionalLight position={[-10, 0, 0]} intensity={1} />
                    <Model />
                    <OrbitControls
                        enableDamping
                        dampingFactor={0.05}
                        minDistance={5}
                        maxDistance={20}
                        target={[0, 0, 0]}
                        enableZoom={true}
                        enablePan={true}
                        enableRotate={true}
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default PerfumeScene;
