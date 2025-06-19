'use client';

import React, { useState, useEffect } from 'react';
// Components
import AFrameWrapper from './components/AFrameWrapper';
import SidebarMap from './components/SidebarMap';
import SidebarItem from './components/SidebarItem';
//  Import type
import {Station, Item} from './components/Map';
// Import Data
import IHMap from './data/IHMap';

export default function Home() {
  
  const [selectedStation, setSelectedStation] = useState<string>('start');
  const [curStation, setCurStation] = useState<Station | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null)
  const [curItem, setCurItem] = useState<Item | null>(null)
  useEffect(() => {
    const station = IHMap.stations[selectedStation];
    setCurStation(station || null);
  }, [selectedStation]);
  useEffect(() => {
    if (selectedItem != null) {
      const item = curStation?.items[selectedItem];
      setCurItem(item || null);
    } else setCurItem(null)
  }, [selectedItem]);

return (
  <div className="relative h-screen w-screen">
    <AFrameWrapper curStation={curStation} selectItem={setSelectedItem}/>
    <div className="absolute top-0 left-0 z-50">
      <SidebarMap selected={selectedStation} setSelected={setSelectedStation}/>
    </div>
    <div className="absolute top-0 right-0 z-50">
      <SidebarItem curItem={curItem} setModelCode={setSelectedItem}/>
    </div>
  </div>
);

}
