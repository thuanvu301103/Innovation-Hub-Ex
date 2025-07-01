import { StaticImageData } from "next/image";

export type Item = {
  code: string;
  name: string;
  type: 'image' | 'model';
  description?: string;
  Uri: string;
  x: number;
  y: number;
  z: number;
  rotation: number;
};

export type Station = {
  code: string;
  name: string;
  description?: string;
  backgroundUrl: string;
  latitude: number;
  longitude: number;
  items: Record<string, Item>;
};

export type MapData = {
  thumbnailUrl: StaticImageData;
  name: string;
  description: string;
  maxLatitude: number;
  maxLongitude: number;
  stations: Record<string, Station>;
};