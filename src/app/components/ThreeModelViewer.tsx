import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';

interface ViewerProps {
  modelUrl: string;
}

const Model: React.FC<ViewerProps> = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  return (
    <group position={[0, 0, -5]}>
      <primitive object={scene} position={[-20, -100, -20]} rotation={[0,Math.PI / 1,0]}/>
    </group>
  );
};

const ThreeModelViewer: React.FC<ViewerProps> = ({ modelUrl }) => {
  return (
    <Canvas camera={{ position: [0, 50, 0], fov: 50, near: 0.1, far: 10000 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 0]} intensity={0.8} />
      <Suspense fallback={null}>
        <Model modelUrl={modelUrl} />
      </Suspense>
      <OrbitControls target={[0, 0, 0]} />
    </Canvas>
  );
};

export default ThreeModelViewer;
