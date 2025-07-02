import type { Station } from '../../components/Map';
import IH004Item001 from '../items/IH004-001';
import IH004Item002 from '../items/IH004-002';
import IH004Item003 from '../items/IH004-003';

const IH004Station: Station = {
    code: 'IH004',
    name: 'CT UAV - IH004',
    description: 'CT UAV bắt đầu từ lý thuyết LAE – Kinh tế Tầm thấp (Low Altitude Economy). Lý thuyết này cực kỳ quan trọng vì nó định hướng cho mọi ngành kinh doanh của CT UAV. Không gian trên mặt đất ngày càng trở nên quá đông đúc, học thuyết này định nghĩa các phân lớp lên không, lên đến độ cao 3.000 mét. Mỗi lớp sẽ hình thành một khu vực kinh tế đặc thù.',
    backgroundUrl: '/station/IH004BG.jpg',
    latitude: 6,
    longitude: 6,
    items: {
        "IH004-001": IH004Item001,
        "IH004-002": IH004Item002,
        "IH004-003": IH004Item003,
    }
};

export default IH004Station;
