'use client';

import dynamic from 'next/dynamic';

// Import động AFrameScene và tắt SSR
const AFrameScene = dynamic(() => import('./AFrameScene'), { ssr: false });

export default function AFrameWrapper() {
  return <AFrameScene />;
}