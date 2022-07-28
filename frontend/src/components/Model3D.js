import '../index.css';
import {Suspense, useEffect, useRef,useState} from 'react'
import { Canvas} from '@react-three/fiber'
import {OrbitControls, useGLTF} from '@react-three/drei'
import React from 'react'


    

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('ModelData/shoe.gltf');
  console.log(nodes);
  console.log(materials);

  const [meshArray, setMeshArray] = useState([]);

  

  useEffect(() => {
    showModel();


  }, [])

  const showModel = () => {
    return Object.keys(nodes).filter(node => (
      nodes[node].type === "Mesh"
    )).map((obj, i) => {
      let cur_mat = materials[Object.keys(materials)[i]];
      // console.log(cur_mat.name);
      // console.log(props);
      return <mesh geometry={nodes[obj].geometry} material={cur_mat} material-color={props.customColors[cur_mat.name]}/>
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
  const [sole, setSole] = useState("#ffffff");
  const [laces, setLaces] = useState("#ffffff");
  const [band, setBand] = useState("#ffffff");
  const [patch, setPatch] = useState("#ffffff");
  const [caps, setCaps] = useState("#ffffff");
  const [inner, setInner] = useState("#ffffff");


  return (
    <div className="App">
        <div className="wrapper">
            
                <div className="product-canvas" style={{marginLeft:'10px'}}>
                   <Canvas>
                      <Suspense fallback={null}>
                          <ambientLight />
                          <spotLight intensity={0.9} 
                                     angle={0.1} 
                                     penumbra={1} 
                                     position={[10,15,10]}
                                     castShadow />
                          <Model customColors={{mesh:mesh, stripes:stripes , sole:sole, laces:laces, band:band, patch:patch, caps:caps, inner:inner}}/>
                          <OrbitControls enablePan={true}
                                         enableZoom={true}
                                         enableRotate={true}/>
                      </Suspense>
                   </Canvas>
                </div>
                <h2 >Color chooser</h2>
                 


                <div className='colors ' style={{display:"block"}}>
                    <div className='card' >
                      <div>
                        <input type="color" id="mesh" name="mesh"
                              value={mesh} 
                              onChange={(e) => setMesh(e.target.value)}/>
                        <h4 style={{display:"inline"}} for="mesh">Main</h4>
                      </div>

                    <div>
                        <input type="color" id="stripes" name="stripes"
                                value= {stripes}
                                onChange={(e) => setStripes(e.target.value)}/>
                        <h4 style={{display:"inline"}} for="stripes">Stripes</h4>
                    </div>
                    <div>
                        <input type="color" id="soul" name="soul"
                                value={sole} 
                                onChange={(e) => setSole(e.target.value)}/>
                        <h4 style={{display:"inline"}} for="soul">Sole</h4>
                    </div>
                    <div>
                        <input type="color" id="laces" name="laces"
                                value={laces} 
                                onChange={(e) => setLaces(e.target.value)}/>
                        <h4 style={{display:"inline"}}for="laces">Laces</h4 >
                    </div>
                    <div>
                        <input type="color" id="band" name="band"
                                value={band} 
                                onChange={(e) => setBand(e.target.value)}/>
                        <h4 style={{display:"inline"}}for="band">Band</h4 >
                    </div>
                    <div>
                        <input type="color" id="patch" name="patch"
                                value={patch} 
                                onChange={(e) => setPatch(e.target.value)}/>
                        <h4 style={{display:"inline"}}for="patch">Patch</h4>
                    </div>
                    <div>
                        <input type="color" id="caps" name="caps"
                                value={caps} 
                                onChange={(e) => setCaps(e.target.value)}/>
                        <h4 style={{display:"inline"}} for="caps">Caps</h4>
                    </div>
                    <div>
                        <input type="color" id="inner" name="inner"
                                value={inner} 
                                onChange={(e) => setInner(e.target.value)}/>
                        <h4 style={{display:"inline"}}for="inner">Inner</h4>
                    </div>
                </div>
            </div>
        </div>
     </div>
  );
};

export default Model3D;
