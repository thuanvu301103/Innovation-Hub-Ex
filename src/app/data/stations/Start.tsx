import type { Station } from '../../components/Map';
import IH001Item001 from '../items/IH001-001';

const StartStation: Station = {
    code: 'start',
    name: 'start',
    description: 'start point',
    backgroundUrl: '/station/Start.jpg',
    latitude: -1,
    longitude: 8,
    items: {
        "IH001-001": IH001Item001 
    }
};

export default StartStation;
