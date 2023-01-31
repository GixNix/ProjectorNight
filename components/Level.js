
import { useGLTF,useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'
import { useThree } from '@react-three/fiber'


export default function Level() {


    const { nodes } = useGLTF("./model/projection-room.glb")
    const bakedtexture = useTexture("./model/Atlas-min.jpg")
    bakedtexture.minFilter = THREE.LinearFilter
    bakedtexture.magFilter = THREE.LinearFilter
    bakedtexture.flipY = false

    const { camera } = useThree()
  useSpring(
    () => ({
      from: { y: camera.position.y + 5 },
      to: { y: camera.position.y },
      config: { friction: 100 },
      onChange: ({ value }) => ((camera.position.y = value.y), camera.lookAt(0, 0, 0)),
    }),
    [],
  )


  return  <mesh geometry={nodes.Level.geometry }  position={[0.09911447018384933,0.050193656235933304, -0.0007793307304382324]}>
            <meshStandardMaterial map={ bakedtexture } />
          </mesh>
        
        
                
  

}
