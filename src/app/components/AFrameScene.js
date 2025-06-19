'use client';
import { useEffect } from 'react';
import 'aframe';
//import {Station} from './Map';

const AFrameScene = ({curStation, selectItem}) => {
    useEffect(() => {
        const AFRAME = window.AFRAME;
        const THREE = window.THREE;

        if (!AFRAME || !THREE) {
            console.warn('AFRAME or THREE not ready');
            return;
        }

        // Limit camera's rotation
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

                const minPitch = -5, maxPitch = 5;
                const minYaw = -100, maxYaw = 100;

                pitch = Math.max(minPitch, Math.min(maxPitch, pitch));
                yaw = Math.max(minYaw, Math.min(maxYaw, yaw));

                pitchObject.rotation.x = THREE.MathUtils.degToRad(pitch);
                yawObject.rotation.y = THREE.MathUtils.degToRad(yaw);
            };

            lookControls.Component.prototype.__patched = true;
        }

        
    Object.values(curStation.items).forEach((item) => {
        const el = document.querySelector(`#${item.code}`);
        if (el) {
            el.addEventListener('click', () => {
                //console.log(`Item ${item.name} đã được bấm!`);
                selectItem(item.code);
            });
        }
    });

        
    }, [curStation]);

    return (
        <a-scene>
            {/* Background 360 */}
            <a-entity
                geometry="primitive: sphere; radius: 10000; thetaLength: 70; thetaStart: 55; phiLength: 300; phiStart:-240" 
                material={`src: ${curStation.backgroundUrl}; side: back`}
                rotation="0 0 0"
            ></a-entity>

            {/* Buttons */}
            
            <a-assets>
                <img id="handIcon" src="/icons/hand.png" />
            </a-assets>
            
            
            {/* Hiển thị các item */}
            {Object.values(curStation.items).map((item) => (
                <a-image
                    key={item.code}
                    id={item.code}
                    src="#handIcon"
                    position={`${item.x} ${item.y} ${item.z}`}
                    width="0.5"
                    height="0.5"
                    class="clickable"
                ></a-image>
            ))}

            {/* Con trỏ chuột */}
            <a-entity
                cursor="rayOrigin: mouse"
                raycaster="objects: .clickable"
            ></a-entity>

            <a-camera fov="60" look-controls></a-camera>
        </a-scene>
    );
};

export default AFrameScene;
