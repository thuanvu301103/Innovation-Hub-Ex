import type { MapData } from '../components/Map';
import IHThumbnail from './IHThumbnail.png';
import StartStation from './stations/Start';
import IH001Station from './stations/IH001';
import IH002Station from './stations/IH002';
import IH003Station from './stations/IH003';
import IH004Station from './stations/IH004';
import IH005Station from './stations/IH005';
import IH006Station from './stations/IH006';
import IH007Station from './stations/IH007';

const IHMap: MapData = {
    thumbnailUrl: IHThumbnail,
    maxLatitude: 8,
    maxLongitude: 16,
    name: "INNOVATION HUB",
    description: "Mục tiêu chính của Trung tâm CT Innovation Hub là nơi nuôi dưỡng, thúc đẩy 9 ngành công nghệ mới, đều là những lĩnh vực ưu tiên theo Nghị quyết 57…",
    stations: {
        start: StartStation,
        IH001: IH001Station,
        IH002: IH002Station,
        IH003: IH003Station,
        IH004: IH004Station,
        IH005: IH005Station,
        IH006: IH006Station,
        IH007: IH007Station,

    }
};

export default IHMap;
