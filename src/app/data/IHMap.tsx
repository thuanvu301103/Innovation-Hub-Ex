import type { MapData } from '../components/Map';
import IHThumbnail from './IHThumbnail.png';
import StartStation from './stations/Start';
import IH001Station from './stations/IH001';
import IH002Station from './stations/IH002';

const IHMap: MapData = {
    thumbnailUrl: IHThumbnail,
    maxLatitude: 10,
    maxLongitude: 15,
    name: "INNOVATION HUB",
    description: "Mục tiêu chính của Trung tâm CT Innovation Hub là nơi nuôi dưỡng, thúc đẩy 9 ngành công nghệ mới, đều là những lĩnh vực ưu tiên theo Nghị quyết 57…",
    stations: {
        start: StartStation,
        IH001: IH001Station,
        IH002: IH002Station
    }
};

export default IHMap;
