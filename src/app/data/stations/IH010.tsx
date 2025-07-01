import type { Station } from '../../components/Map';
import IH001Item001 from '../items/IH010-001';

const IH010Station: Station = {
    code: 'IH010',
    name: 'CT modulex - IH010',
    description: '',
    backgroundUrl: '/station/IH010BG.jpg',
    latitude: 1,
    longitude: 11,
    items: {
        "IH001-001": IH001Item001 
    }
};

export default IH010Station;
