import { StaticImageData } from "next/image";

export type Station = {
  code: string;
  name: string;
  description?: string;
  backgroundUrl: string;
  latitude: number;
  longitude: number;
};

export type MapData = {
  thumbnailUrl: StaticImageData;
  name: string;
  description: string;
  maxLatitude: number;
  maxLongitude: number;
  stations: Record<string, Station>;
};