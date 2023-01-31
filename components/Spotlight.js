import * as THREE from 'three'
import { useState } from 'react'
import {SpotLight } from '@react-three/drei'


export default function Spot(){

    const target = new THREE.Object3D()

    return (
        <mesh>
            <SpotLight
        // castShadow
        target={target}
        penumbra={0.9}
        radiusTop={0.006}
        radiusBottom={4.5}
        distance={10}
        angle={0.35}
        attenuation={1.3}
        anglePower={9}
        intensity={0.1}
        opacity={0.1}
        position = {[0.17,0.3,-.12 ]}
        
        
      />
      <primitive object={target} position={[-0.94,0.8653444766998291,-0.18901632726192474]} />
        </mesh>
        
    )
}

