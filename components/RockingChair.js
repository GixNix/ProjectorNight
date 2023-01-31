import { useGLTF,useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useSpring, a } from '@react-spring/three'
import { useEffect } from 'react'






export default function RockingChair() {

    const { nodes } = useGLTF("./model/projection-room.glb")
    const bakedtexture = useTexture("./model/Atlas-min.jpg")
    bakedtexture.minFilter = THREE.LinearFilter
    bakedtexture.magFilter = THREE.LinearFilter
    bakedtexture.flipY = false
    console.log(nodes)

    // const [spring, api] = useSpring(() => ({ 'rotation-x': 0, config: { friction: 100, mass:1, tension:180 } }), [])
    // useEffect(() => {
    //   let timeout
    //   const wander = () => {
    //     api.start({ 'rotation-x': (-0.2 + Math.random() * 0.4) })
        
    //     timeout = setTimeout(wander, (1 + Math.random() * 1) * 500)
    //   }
    //   wander()
    //   return () => clearTimeout(timeout)
    // }, [])

  return <>
        
        <a.group position={[-0.33754801750183105,0.051552437245845795,-0.7599624395370483]} >
            <mesh geometry={nodes.RockingChair.geometry }   >
                <meshStandardMaterial map={ bakedtexture } />
            </mesh>
        </a.group>
            
        

  </>
}