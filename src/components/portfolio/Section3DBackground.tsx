import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface Props {
  variant?: "primary" | "accent" | "subtle";
  density?: "low" | "medium" | "high";
}

const FloatingShape = ({ 
  position, 
  color, 
  size = 0.5,
  speed = 1 
}: { 
  position: [number, number, number]; 
  color: string;
  size?: number;
  speed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.05 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08 * speed;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.3} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.4}
          metalness={0.6}
          transparent
          opacity={0.3}
        />
      </Sphere>
    </Float>
  );
};

const WireframeShape = ({
  position,
  color,
  type = "octahedron",
}: {
  position: [number, number, number];
  color: string;
  type?: "octahedron" | "icosahedron" | "dodecahedron";
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  const getGeometry = () => {
    switch (type) {
      case "icosahedron":
        return <icosahedronGeometry args={[0.4, 0]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[0.4, 0]} />;
      default:
        return <octahedronGeometry args={[0.4, 0]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getGeometry()}
      <meshStandardMaterial
        color={color}
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
};

const Scene = ({ variant, density }: Props) => {
  const primaryColor = "#00d4ff";
  const accentColor = "#ffc107";
  const color = variant === "accent" ? accentColor : primaryColor;
  
  const shapes = density === "high" ? 4 : density === "medium" ? 3 : 2;

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight position={[5, 5, 5]} intensity={0.2} color={primaryColor} />
      
      <FloatingShape position={[-4, 0, -3]} color={color} size={0.6} speed={0.4} />
      <FloatingShape position={[4, 1, -4]} color={accentColor} size={0.4} speed={0.6} />
      
      {shapes >= 3 && (
        <WireframeShape position={[3, -1, -2]} color={color} type="octahedron" />
      )}
      {shapes >= 4 && (
        <WireframeShape position={[-3, 1.5, -3]} color={accentColor} type="icosahedron" />
      )}
    </>
  );
};

export const Section3DBackground = ({ variant = "primary", density = "low" }: Props) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene variant={variant} density={density} />
      </Canvas>
    </div>
  );
};
