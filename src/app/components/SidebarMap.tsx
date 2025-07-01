'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import IHMap from '../data/IHMap';
import { MapPinIcon } from '@heroicons/react/24/solid';

import {Station} from './Map';

function convertLatLngToPixel(
  lat: number,
  lng: number,
  mapBounds: { minLat: number; maxLat: number; minLng: number; maxLng: number },
  imageSize: { width: number; height: number }
) {
  const { minLat, maxLat, minLng, maxLng } = mapBounds;
  const { width, height } = imageSize;

  const x = ((lng - minLng) / (maxLng - minLng)) * width;
  const y = ((maxLat - lat) / (maxLat - minLat)) * height;

  return { x, y };
}



interface SidebarMapProps {
    selected: string;
    setSelected: (value: string) => void;
}

const SidebarMap = ({selected, setSelected} : SidebarMapProps ) => {
  const [isVisible, setIsVisible] = useState(true);

  const imageWidth = 541;
  const imageHeight = 333;

  return (
    <div className="flex flex-col">
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute top-4 left-4 z-50 bg-white text-black px-2 py-2 rounded shadow"
      >
        <MapPinIcon className={`h-6 w-6 ${isVisible ? 'text-blue-500' : 'text-black'}`} />
      </button>

      {/* Sidebar */}
      {isVisible && (
        <aside className="flex flex-col justify-around z-40 w-96 p-5 bg-black/50 h-screen overflow-y-auto">
          <div className="relative w-full" style={{ aspectRatio: `${imageWidth} / ${imageHeight}` }}>
            <Image
              src={IHMap.thumbnailUrl}
              alt="Innovation Hub Map Thumbnail"
              fill
              className="w-full"
            />

            {/* Station Markers */}
            {Object.values(IHMap.stations).map((station: Station) => {
              const { x, y } = convertLatLngToPixel(
                station.latitude,
                station.longitude,
                {
                  minLat: 0,
                  maxLat: IHMap.maxLatitude,
                  minLng: 0,
                  maxLng: IHMap.maxLongitude,
                },
                { width: 344, height: 211.75 }
              );

              return (
                <button
                  key={station.code}
                  className={`absolute ${selected == station.code? 'bg-pink-500 w-5 h-5' : 'bg-blue-500 w-4 h-4'} rounded-full border border-white`}
                  style={{ top: `${y}px`, left: `${x}px` }}
                  title={station.name}
                  onClick={() => setSelected(station.code)}
                />
              );
            })}
          </div>

          {/* Innovation Hub Info */}
          <div className="w-full max-w-sm mx-auto mt-10">
            <div className="border-t-4 border-white bg-black/40 text-gray-300 p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-2">{IHMap.name}</h3>
              <p className="text-sm text-gray-400">{IHMap.description}</p>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default SidebarMap;