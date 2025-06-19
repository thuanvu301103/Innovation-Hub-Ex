'use client';

import dynamic from 'next/dynamic';
import {Station} from './Map';
const AFrameScene = dynamic(() => import('./AFrameScene'), { ssr: false });

interface AFrameWrapperProps {
  curStation: Station | null
}

export default function AFrameWrapper({curStation}: AFrameWrapperProps) {
  return <AFrameScene curStation={curStation}/>;
}