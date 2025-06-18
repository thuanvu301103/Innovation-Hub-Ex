import dynamic from 'next/dynamic';
import { FC } from 'react';
import AFrameWrapper from './components/AFrameWrapper';

export default function Home() {
  
return (
  <div>
    <h1>Không gian 360 độ với A-Frame</h1>
    <AFrameWrapper />
  </div>
);

}
