import '../index.css';
import {Suspense, useEffect, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import React from 'react'


    

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/nike_air_zoom_pegasus_36.glb');
  console.log(nodes);
  console.log(materials);

  const [meshArray, setMeshArray] = useState([]);

  

  useEffect(() => {
    showModel();


  }, [])

  const showModel = () => {
    return Object.keys(nodes).filter(node => (
      nodes[node].type === "Mesh"
    )).map(obj => {
      return <mesh geometry={nodes[obj].geometry} material={materials.NikeShoe} material-color={props.customColors.setStripes}/>
    })
  }
  

  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      {showModel()}
    </group>
  )
}


function Model3D() {
 
  const [mesh,setMesh] = useState("#ffffff")
  const [stripes,setStripes] = useState("#ffffff")
  const [soul,setSoul] = useState("#ffffff")

  return (
    <div className="App">
        <div className="wrapper">
            {/* <div className="card"> */}
                <div className="product-canvas">
                   <Canvas>
                      <Suspense fallback={null}>
                          <ambientLight />
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
                          <Model customColors={{mesh:mesh, stripes:stripes , soul:soul }}/>
                          <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/>
                      </Suspense>
                   </Canvas>
                </div>
                <h2>Color chooser</h2>
                <div className='colors'>
                    <div>
                        <input type="color" id="mesh" name="mesh"
                              value={mesh} 
                              onChange={(e) => setMesh(e.target.value)}/>
                        <label for="mesh">Main</label>
                      </div>

                    <div>
                        <input type="color" id="stripes" name="stripes"
                                value= {stripes}
                                onChange={(e) => setStripes(e.target.value)}/>
                        <label for="stripes">Stripes</label>
                    </div>
                    <div>
                        <input type="color" id="soul" name="soul"
                                value={soul} 
                                onChange={(e) => setSoul(e.target.value)}/>
                        <label for="soul">Soul</label>
                    </div>
                </div>
            </div>
        </div>
    // </div>
  );
};

export default Model3D;
