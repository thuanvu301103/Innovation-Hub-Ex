
'use client';
import { useEffect } from 'react';
import 'aframe';

const AFrameScene: React.FC = () => {
  useEffect(() => {
    const button = document.querySelector('#myButton');
    if (button) {
      button.addEventListener('click', () => {
        console.log('Nút đã được bấm!');
      });
    }
  }, []);

  return (
    <a-scene>
      <a-sky src="/360.jpg" rotation="0 -130 0"></a-sky>

      <a-entity
        id="myButton"
        geometry="primitive: plane; height: 0.5; width: 1"
        material="color: #24CAFF"
        position="0 2 -4"
        text="value: Bấm vào đây; align: center; color: black"
        className="clickable"
        event-set__enter="_event: mouseenter; material.color: #00FF00"
        event-set__leave="_event: mouseleave; material.color: #24CAFF"
      ></a-entity>

      {/* Con trỏ chuột */}
      <a-entity
        id="mouseCursor"
        cursor="rayOrigin: mouse"
        raycaster="objects: .clickable"
      />

      {/* Camera (không cần cursor ở đây nếu dùng chuột) */}
      <a-entity camera look-controls></a-entity>
    </a-scene>
  );
};

export default AFrameScene;