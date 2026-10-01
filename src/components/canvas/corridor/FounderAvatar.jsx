import { useState, useEffect } from 'react';
import { useTexture, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

/**
 * FounderAvatar - sketch-style NxtWave founder floating beside the guide avatar.
 * Texture: /textures/corridor/founder_sketch.webp (pencil sketch on paper, transparent bg)
 */
const FounderAvatar = ({ position = [1.7, -0.35, -0.6] }) => {
    const [dims, setDims] = useState({ width: 0.9, height: 1.6 });
    const texture = useTexture('/textures/corridor/founder_sketch.webp');

    useEffect(() => {
        if (texture) {
            texture.colorSpace = THREE.SRGBColorSpace;
            if (texture.image) {
                const aspect = texture.image.width / texture.image.height;
                const h = 1.7;
                setDims({ width: h * aspect, height: h });
            }
        }
    }, [texture]);

    return (
        <group position={position}>
            <Float speed={1.6} rotationIntensity={0.08} floatIntensity={0.35}>
                <mesh>
                    <planeGeometry args={[dims.width, dims.height]} />
                    <meshBasicMaterial
                        map={texture}
                        transparent={true}
                        alphaTest={0.05}
                        side={THREE.DoubleSide}
                        depthWrite={false}
                    />
                </mesh>
            </Float>
            <Text
                position={[0, dims.height / 2 + 0.22, 0]}
                fontSize={0.11}
                color="#311059"
                anchorX="center"
                anchorY="middle"
                font="/fonts/CabinSketch-Bold.ttf"
            >
                MEET THE FOUNDER
            </Text>
        </group>
    );
};

export default FounderAvatar;
