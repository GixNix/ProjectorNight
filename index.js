import './style.css'
import ReactDOM from 'react-dom/client'
import Experience from './Experience.js'
import { StrictMode, Suspense } from 'react'
import { Loader } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(

    
        <StrictMode>
            <Suspense fallback={null}>
             <Experience />
            </Suspense>
            <Loader />
        </StrictMode>
        
   
)