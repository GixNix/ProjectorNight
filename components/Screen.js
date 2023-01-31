import { useVideoTexture,Plane,useGLTF,useTexture } from '@react-three/drei'
import { Suspense } from 'react'


 


  function FallbackMaterial({ url }) {
    const texture = useTexture(url)
    return <meshBasicMaterial map={texture} toneMapped={false} />
  }
  


export default function Screen(){

    
    const texture = useVideoTexture("./video.mp4")

    

    return (

        

        <Plane args={[1.11,0.871]} position={[-0.94,0.8653444766998291,-0.18901632726192474]} rotation = {[0,( 0.5 * Math.PI), 0]} >
            <Suspense fallback={<FallbackMaterial url="./wait.png" />}>
                <meshBasicMaterial map={texture} alphaMap={texture} transparent={true} alphaTest={0.1}/>
                
            </Suspense>
            
            
        </Plane>
    )

}