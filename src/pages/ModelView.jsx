import * as THREE from 'three'
import { Canvas, extend, useThree } from "@react-three/fiber"
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import WebglScene from "../components/Webgl/WebglLoader"

extend({ OrbitControls})

export default function ModelView(){
    return(
        <div id='webgl-container'>
        <Canvas  
            gl={ {
            antialias: true,
            toneMapping: THREE.ACESFilmicToneMapping,
            // outputColorSpace: THREE.SRGBColorSpace
        } }
        camera={ {
            fov: 45,
            near: 0.1,
            far: 200,
            position: [ 2, 7, 5 ]
        } }>
            <WebglScene/>
        </Canvas>
        <h1 className="model-title">Model Loading</h1>

        {/* <script src="/dvlpText.js" type="text/javascript"></script> */}
        </div>
    )
}