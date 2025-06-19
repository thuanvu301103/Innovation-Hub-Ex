'use client';

import React, { useState, useEffect } from 'react';

import AFrameWrapper from './components/AFrameWrapper';
import SidebarMap from './components/SidebarMap';
// Import type
import {Station} from './components/Map';
// Import Data
import IHMap from './data/IHMap';

export default function Home() {
  
  const [selectedStation, setSelectedStation] = useState<string>('start');
  const [curStation, setCurStation] = useState<Station | null>(null);
  useEffect(() => {
    const station = IHMap.stations[selectedStation];
    setCurStation(station || null);
  }, [selectedStation]);

return (
  <div className="relative h-screen w-screen">
    {/* AFrame scene nằm phía dưới */}
    <AFrameWrapper curStation={curStation}/>
    {/* Sidebar nằm phía trên */}
    <div className="absolute top-0 left-0 z-50">
      <SidebarMap selected={selectedStation} setSelected={setSelectedStation}/>
    </div>
  </div>
);

}
