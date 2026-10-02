import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const CABIN_BOLD = '/fonts/CabinSketch-Bold.ttf';
const CABIN_REG = '/fonts/CabinSketch-Regular.ttf';

/**
 * CenterQA - floating question + short convincing answer panels
 * at the corridor center. User scrolls past them between doors.
 */
const QA_ITEMS = [
    {
        q: 'NO PYTHON?',
        a: 'Zero code. Just prompt.',
        x: -1.3, // floats by THE WORKSHOP door (left)
        z: -14,
    },
    {
        q: '60 MINUTES, REALLY?',
        a: 'Live URL before you leave.',
        x: 1.3, // floats by the NXTWAVE door (right)
        z: -28,
    },
    {
        q: 'FINAL-YEAR? PLACEMENTS?',
        a: '72% interviews ask AI project.',
        x: -1.3, // floats by the OUTCOMES door (left)
        z: -42,
    },
    {
        q: 'IS IT FREE?',
        a: 'Yes. Certificate included.',
        x: 1.3, // floats by the REGISTER door (right)
        z: -56,
    },
];

const QACard = ({ item, zOffset }) => {
    const groupRef = useRef();

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;
        groupRef.current.position.y = Math.sin(t * 0.8 + item.z) * 0.06;
    });

    return (
        <group ref={groupRef} position={[item.x || 0, 0, zOffset + item.z]}>
            {/* backing paper */}
            <mesh position={[0, 0.95, -0.02]}>
                <planeGeometry args={[2.0, 0.85]} />
                <meshBasicMaterial color="#fcf3c6" transparent opacity={0.92} side={THREE.DoubleSide} />
            </mesh>
            <Text
                position={[0, 1.12, 0]}
                fontSize={0.16}
                color="#111111"
                anchorX="center"
                anchorY="middle"
                font={CABIN_BOLD}
            >
                {item.q}
            </Text>
            <Text
                position={[0, 0.82, 0]}
                fontSize={0.11}
                color="#4a4a4a"
                anchorX="center"
                anchorY="middle"
                font={CABIN_REG}
            >
                {item.a}
            </Text>
        </group>
    );
};

const CenterQA = ({ zOffset }) => {
    return (
        <group>
            {QA_ITEMS.map((item, i) => (
                <QACard key={i} item={item} zOffset={zOffset} />
            ))}
        </group>
    );
};

export default CenterQA;
