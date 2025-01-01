import * as THREE from 'three'
import {extend, useThree } from "@react-three/fiber"
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import {Suspense} from 'react'

import Model from './ModelLoader'

extend({ OrbitControls})

export default function WebglScene(){
    const {camera, gl} = useThree()

    return(

        <>
            <orbitControls args={[camera, gl.domElement]}/>
            <directionalLight position={[0.25,4,0.5]} intensity={2.65}/>

            <Suspense>
                <Model />
            </Suspense>
        </>
    )
    
}