import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

const isWebGLAvailable = () => {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
};

const AnimatedSphere = (
  {
    position,
    color,
    speed = 1,
    distort = 0.3,
  }: {
    position: [number, number, number];
    color: string;
    speed?: number;
    distort?: number;
  }
) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.6}
        />
      </Sphere>
    </Float>
  );
};

const FloatingParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00d4ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

const GeometricShapes = () => {
  const group1Ref = useRef<THREE.Group>(null);
  const group2Ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group1Ref.current) {
      group1Ref.current.rotation.y = state.clock.elapsedTime * 0.1;
      group1Ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
    if (group2Ref.current) {
      group2Ref.current.rotation.y = -state.clock.elapsedTime * 0.08;
      group2Ref.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <>
      <group ref={group1Ref} position={[4, 1, -3]}>
        <mesh>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color="#00d4ff"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>
      <group ref={group2Ref} position={[-4, -1, -2]}>
        <mesh>
          <icosahedronGeometry args={[0.6, 0]} />
          <meshStandardMaterial
            color="#ffc107"
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      </group>
    </>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#00d4ff" />

      <AnimatedSphere position={[-3, 1, -5]} color="#00d4ff" speed={0.5} distort={0.4} />
      <AnimatedSphere position={[3.5, -1, -6]} color="#ffc107" speed={0.3} distort={0.3} />
      <AnimatedSphere position={[0, 2.5, -8]} color="#00d4ff" speed={0.4} distort={0.5} />

      <FloatingParticles />
      <GeometricShapes />

      <Stars
        radius={50}
        depth={50}
        count={1000}
        factor={2}
        saturation={0}
        fade
        speed={0.5}
      />
    </>
  );
};

export const ThreeBackground = () => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(isWebGLAvailable());
  }, []);

  if (!enabled) {
    return (
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-background via-background/70 to-background"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};
