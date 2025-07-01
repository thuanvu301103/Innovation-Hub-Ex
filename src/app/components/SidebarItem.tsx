// components/SidebarItem.tsx
'use client';

import React from 'react';

import { XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import ThreeModelViewer from './ThreeModelViewer';
import {Item} from '../components/Map';

interface RightSidebarProps {
  curItem: Item | null;
  setModelCode: (code: string | null) => void;
}

interface ItemProps {
  curItem: Item;
}

const ModelItem = ({curItem}: ItemProps) => {
  return <> 
    <div className="relative w-full h-3/5 bg-indigo-100 rounded overflow-hidden">
      <ThreeModelViewer modelUrl={curItem == null?`/3Dmodel/test.glb`: `/3Dmodel/${curItem.code}.glb`} />
    </div>
    <div className="w-full mt-10">
      <div className="border-t-4 border-white bg-black/40 text-gray-300 p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-2">{curItem.name}</h3>
        <p className="text-sm text-gray-400">{curItem.description}</p>
      </div>
    </div>
  </>;
}

const ImageItem = ({curItem}: ItemProps) => {
  return <> 
    <div className="relative w-full h-3/5 bg-indigo-100 rounded overflow-hidden">
      <Image
        src={curItem.Uri}
        alt={curItem.name}
        fill
        className="w-full"
      />
    </div>
    <div className="w-full mt-10">
      <div className="border-t-4 border-white bg-black/40 text-gray-300 p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-2">{curItem.name}</h3>
        <p className="text-sm text-gray-400">{curItem.description}</p>
      </div>
    </div>
  </>;
}

const SidebarItem = ({ curItem, setModelCode }: RightSidebarProps) => {

  return (
    <div className="flex flex-col items-end w-full">

      {/* Sidebar */}
      {curItem != null && (<div className='flex flex-col items-end w-full'>
        <button
          onClick={() => setModelCode(null)}
          className="absolute top-4 right-4 z-50 bg-white text-black px-2 py-2 rounded shadow"
        >
          <XMarkIcon className={`h-6 w-6 ${curItem ? 'text-blue-500' : 'text-black'}`} />
        </button>
        <aside className="fixed right-0 top-0 z-40 w-[85%] lg:w-1/2 p-5 bg-black/50 h-screen overflow-y-auto">
          <h2 className="text-white text-lg font-semibold mb-4">Các thông tin liên quan</h2>
          { curItem.type == 'image'? <ImageItem curItem={curItem}/>: <ModelItem curItem={curItem}/> } 
        </aside>
        
      </div>)}
    </div>
  );
};

export default SidebarItem;