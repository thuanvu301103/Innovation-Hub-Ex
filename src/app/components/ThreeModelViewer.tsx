import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import React, { Suspense } from 'react';

interface ViewerProps {
  modelUrl: string;
}

const Model: React.FC<ViewerProps> = ({ modelUrl }) => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} />;
};

const ThreeModelViewer: React.FC<ViewerProps> = ({ modelUrl }) => {
  return (
    <Canvas camera={{ position: [0, 0.5, 0], fov: 50 }}>
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
