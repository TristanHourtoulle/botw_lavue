"use client"
import { Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Suspense } from 'react'
import { useEffect, useState } from 'react'
import { type GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshPhysicalMaterial } from 'three'
import { Environment, OrbitControls } from '@react-three/drei'
import {Model} from "@/components/three/perfumeOrbital";

const PerfumeScene = ({xpos, ypos, zpos, xrot, yrot, zrot}: {xpos: number, ypos: number, zpos:number, xrot: number, yrot: number, zrot:number}) => {
    return (
        <div className="h-[620px] w-full relative">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                style={{
                    background: 'transparent'
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
                    <Environment preset="studio" />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 2}
                        maxPolarAngle={Math.PI / 2}
                    />
                    <Model scale={0.6} xpos={xpos} ypos={ypos} zpos={zpos} xrot={xrot} yrot={yrot} zrot={zrot}/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default PerfumeScene;
