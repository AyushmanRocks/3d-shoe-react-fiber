import "../index.css";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import React from "react";

function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF(props.modelname);
  console.log(nodes);
  console.log(materials);

  const [meshArray, setMeshArray] = useState([]);

  useEffect(() => {
    showModel();
  }, []);

  const showModel = () => {
    return Object.keys(nodes)
      .filter((node) => nodes[node].type === "Mesh")
      .map((obj, i) => {
        let cur_mat = materials[Object.keys(materials)[i]];
        // console.log(cur_mat.name);
        // console.log(props);
        return (
          <mesh
            geometry={nodes[obj].geometry}
            material={cur_mat}
            material-color={props.customMat[i]}
          />
        );
      });
  };

  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      {showModel()}
    </group>
  );
}

function Model3D() {
  const [mesh, setMesh] = useState("#ffffff");
  const [stripes, setStripes] = useState("#ffffff");
  const [sole, setSole] = useState("#ffffff");
  const [laces, setLaces] = useState("#ffffff");
  const [band, setBand] = useState("#ffffff");
  const [patch, setPatch] = useState("#ffffff");
  const [caps, setCaps] = useState("#ffffff");
  const [inner, setInner] = useState("#ffffff");

  const modelName = "ModelData/used_new_balance_574_classic______free.glb";

  const { nodes, materials } = useGLTF(modelName);
  console.log(nodes);
  console.log(materials);
  const [customMat, setCustomMat] = useState(Array.from(Object.keys(materials), a => '#fff'));
  console.log(customMat);


  const updateCustomMat = (i, val) => {
    let newCustomMat = customMat;
    newCustomMat[i] = val;
    setCustomMat([...newCustomMat]);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <div className="product-canvas" style={{ marginLeft: "10px" }}>
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight
                intensity={0.9}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <Model
              customMat={customMat}
                modelname={modelName}
                customColors={{
                  mesh: mesh,
                  stripes: stripes,
                  sole: sole,
                  laces: laces,
                  band: band,
                  patch: patch,
                  caps: caps,
                  inner: inner,
                }}
              />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
              />
            </Suspense>
          </Canvas>
        </div>

        <div>
          <h2 className="text-center">Color chooser</h2>

          <div className="colors container mt-5 ">
            <div className="row">
              <div className="col-md-3 mt-4">
                <div className="card">
                  {customMat.map((mat, i) => (
                    <div className="card-body">
                    <input
                      type="color"
                      id="mesh"
                      name="mesh"
                      value={mat}
                      onChange={(e) => updateCustomMat( i, e.target.value)}
                    />
                    <h4 style={{ display: "inline" }} for="mesh">
                      {Object.keys(materials)[i]}
                    </h4>
                  </div>
                  ))}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Model3D;
