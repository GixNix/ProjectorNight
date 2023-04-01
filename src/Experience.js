import { Canvas } from '@react-three/fiber'
import { PresentationControls } from '@react-three/drei'
import { EffectComposer,Noise,Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import Level from './components/Level'
import RockingChair from './components/RockingChair'
import Screen from './components/Screen'
import Spot from './components/Spotlight'





export default function Experience()
{
    return <>

        <Canvas flat camera={ {fov: 35, near: 0.001, far: 10, position: [ 1, 2, 6 ]} } >

        <color args={ [ '#293135' ] } attach="background" />
        <ambientLight  color={ '#feebce' } intensity={2}/>
        <fog attach="fog" args={['#202020', 5, 20]} />
        <EffectComposer multisampling={0}>
            <Vignette 
            offset={ 0.3 }
            darkness={ 0.7 }
            blendFunction={ BlendFunction.NORMAL }
            />
            <Noise
            opacity={0.1}
            blendFunction={BlendFunction.SOFT_LIGHT } />
           
        </EffectComposer>

                <PresentationControls
                        global
                        zoom={0.8}
                        rotation={[0, -Math.PI / 4, 0]}
                        polar={[0, Math.PI / 4]}
                        azimuth={[-Math.PI / 4, Math.PI / 4]}>
                 

                 <group position-y={-0.75} dispose={null}>
                    
                    <Spot />
                    <Screen />
                    <Level />
                    <RockingChair />   
                 </group>
                    
             
                </PresentationControls>
            
        </Canvas>

        
    </>
}