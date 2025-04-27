"use client"
import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import {Model} from "@/components/three/perfumeOrbital";

const useResponsiveScale = () => {
    const [scale, setScale] = useState(0.5);

    useEffect(() => {
        const updateScale = () => {
            const width = window.innerWidth;
            if (width < 640) setScale(0.5);
            else if (width < 768) setScale(0.45);
            else if (width < 1024) setScale(0.5);
            else if (width < 1280) setScale(0.55);
            else if (width < 1536) setScale(0.6);
            else setScale(0.65);
        };

        updateScale();
        window.addEventListener('resize', updateScale);
        return () => window.removeEventListener('resize', updateScale);
    }, []);

    return scale;
};

const PerfumeScene = ({xpos, ypos, zpos, xrot, yrot, zrot}: {xpos: number, ypos: number, zpos:number, xrot: number, yrot: number, zrot:number}) => {
    const scale = useResponsiveScale();

    return (
        <div className="h-full w-full relative">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                style={{
                    background: 'transparent'
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
                    <Environment preset={"studio"} environmentIntensity={0.2} />
                    <ambientLight intensity={1} />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        minPolarAngle={Math.PI / 2}
                        maxPolarAngle={Math.PI / 2}
                    />
                    <Model 
                        scale={scale} 
                        xpos={xpos} 
                        ypos={ypos} 
                        zpos={zpos} 
                        xrot={xrot} 
                        yrot={yrot} 
                        zrot={zrot}
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default PerfumeScene;
