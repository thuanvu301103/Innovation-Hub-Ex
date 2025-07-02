import type { Station } from '../../components/Map';
import IH010Item001 from '../items/IH010-001';
import IH010Item002 from '../items/IH010-002';

const IH010Station: Station = {
    code: 'IH010',
    name: 'CT modulex - IH010',
    description: '',
    backgroundUrl: '/station/IH010BG.jpg',
    latitude: 1,
    longitude: 11,
    items: {
        "IH010-001": IH010Item001,
        "IH010-002": IH010Item002,
    }
};

export default IH010Station;
