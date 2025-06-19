'use client';
import { useEffect } from 'react';
import 'aframe';
//import {Station} from './Map';

const AFrameScene = ({curStation}) => {
    useEffect(() => {
        const AFRAME = window.AFRAME;
        const THREE = window.THREE;

        if (!AFRAME || !THREE) {
            console.warn('AFRAME hoặc THREE chưa sẵn sàng');
            return;
        }

        // Ghi đè tick của look-controls để giới hạn góc quay
        const lookControls = AFRAME.components['look-controls'];
        if (lookControls && lookControls.Component && !lookControls.Component.prototype.__patched) {
            const originalTick = lookControls.Component.prototype.tick;

            lookControls.Component.prototype.tick = function (...args) {
                if (typeof originalTick === 'function') {
                    originalTick.apply(this, args);
                }

                const pitchObject = this.pitchObject;
                const yawObject = this.yawObject;
                if (!pitchObject || !yawObject) return;

                let pitch = THREE.MathUtils.radToDeg(pitchObject.rotation.x);
                let yaw = THREE.MathUtils.radToDeg(yawObject.rotation.y);

                const minPitch = -20, maxPitch = 20;
                const minYaw = -80, maxYaw = 80;

                pitch = Math.max(minPitch, Math.min(maxPitch, pitch));
                yaw = Math.max(minYaw, Math.min(maxYaw, yaw));

                pitchObject.rotation.x = THREE.MathUtils.degToRad(pitch);
                yawObject.rotation.y = THREE.MathUtils.degToRad(yaw);
            };

            lookControls.Component.prototype.__patched = true;
        }

        // Gắn click vào entity
        const button = document.querySelector('#myButton');
        if (button) {
            button.addEventListener('click', () => {
                console.log('Nút đã được bấm!');
            });
        }
    }, []);

    return (
        <a-scene>
            {/* Background hình cầu 360 */}
            <a-entity
                geometry="primitive: sphere; radius: 10000; thetaLength: 70; thetaStart: 60; phiLength: 300"
                material={`src: ${curStation.backgroundUrl}; side: back`}
                rotation="0 0 0"
            ></a-entity>

            {/* Nút bấm */}
            <a-entity
                id="myButton"
                geometry="primitive: plane; height: 0.5; width: 1"
                material="color: #24CAFF"
                position="0 2 -4"
                text="value: Bấm vào đây; align: center; color: black"
                class="clickable"
                event-set__enter="_event: mouseenter; material.color: #00FF00"
                event-set__leave="_event: mouseleave; material.color: #24CAFF"
            ></a-entity>

            {/* Con trỏ chuột */}
            <a-entity
                cursor="rayOrigin: mouse"
                raycaster="objects: .clickable"
            ></a-entity>

            {/* Camera có giới hạn góc quay */}
            <a-camera fov="60" look-controls></a-camera>
        </a-scene>
    );
};

export default AFrameScene;
