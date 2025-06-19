'use client';

import dynamic from 'next/dynamic';
import {Station} from './Map';
const AFrameScene = dynamic(() => import('./AFrameScene'), { ssr: false });

interface AFrameWrapperProps {
  curStation: Station | null;
  selectItem: (code: string | null) => void;
}

export default function AFrameWrapper({curStation, selectItem}: AFrameWrapperProps) {
  return <AFrameScene curStation={curStation} selectItem={selectItem}/>;
}