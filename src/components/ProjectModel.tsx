
import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Html, Bounds, useBounds } from "@react-three/drei";
import { Loader2 } from "lucide-react";
import * as THREE from "three";

// Model mapping for each project
const projectModels: Record<number, string> = {
  1: "/models/glass_pavilion.glb", 
  2: "/models/eco_tower.glb",
  3: "/models/spa_retreat.glb",
  4: "/models/horizon_house.glb", 
  5: "/models/art_gallery.glb",
  6: "/models/garden_lofts.glb",
};

// Category fallback models
const categoryModels: Record<string, string> = {
  "Residential": "/models/residential_default.glb",
  "Commercial": "/models/commercial_default.glb",
  "Cultural": "/models/cultural_default.glb",
  "Hospitality": "/models/hospitality_default.glb",
  "Multi-Residential": "/models/multi_residential_default.glb",
};

// Enhanced fallback models with more realistic architectural features
function EnhancedModel({ category = "Residential" }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.15;
    }
  });

  // Different detailed architectural models based on category
  const getModel = () => {
    switch (category) {
      case "Residential":
        return (
          <group ref={group} position={[0, 0, 0]}>
            {/* Ground/foundation */}
            <mesh receiveShadow position={[0, -0.05, 0]}>
              <boxGeometry args={[7, 0.1, 7]} />
              <meshStandardMaterial color="#93806c" />
            </mesh>
            
            {/* Main house structure */}
            <mesh castShadow receiveShadow position={[0, 1, 0]}>
              <boxGeometry args={[5, 2, 4]} />
              <meshStandardMaterial color="#e8e8e8" metalness={0.1} roughness={0.8} />
            </mesh>
            
            {/* Roof */}
            <mesh castShadow position={[0, 2.4, 0]} rotation={[0, Math.PI / 4, 0]}>
              <coneGeometry args={[3.5, 1.5, 4]} />
              <meshStandardMaterial color="#7d5a4f" roughness={0.7} />
            </mesh>
            
            {/* Windows front */}
            {[-1.5, 1.5].map((x, i) => (
              <mesh key={`window-front-${i}`} position={[x, 1, 2.01]} castShadow>
                <boxGeometry args={[1, 1, 0.1]} />
                <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.2} transmission={0.9} />
              </mesh>
            ))}
            
            {/* Windows back */}
            {[-1.5, 1.5].map((x, i) => (
              <mesh key={`window-back-${i}`} position={[x, 1, -2.01]} castShadow>
                <boxGeometry args={[1, 1, 0.1]} />
                <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.2} transmission={0.9} />
              </mesh>
            ))}
            
            {/* Door */}
            <mesh position={[0, 0.6, 2.01]} castShadow>
              <boxGeometry args={[1.2, 1.8, 0.1]} />
              <meshStandardMaterial color="#5c4033" roughness={0.8} />
            </mesh>
            
            {/* Pool */}
            <mesh position={[3, -0.1, 0]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
              <boxGeometry args={[3, 2, 0.2]} />
              <meshPhysicalMaterial color="#0099ff" roughness={0} metalness={0.1} transmission={0.9} />
            </mesh>

            {/* Garden */}
            {[[-2, 0], [-2.5, 1], [-3, -1]].map((pos, i) => (
              <mesh key={`tree-${i}`} position={[pos[0], 0.5, pos[1]]} castShadow>
                <cylinderGeometry args={[0.1, 0.1, 1, 8]} />
                <meshStandardMaterial color="#5c4033" />
                <mesh position={[0, 0.8, 0]}>
                  <sphereGeometry args={[0.5, 16, 16]} />
                  <meshStandardMaterial color="#2e8b57" />
                </mesh>
              </mesh>
            ))}
          </group>
        );
      
      case "Commercial":
        return (
          <group ref={group} position={[0, 0, 0]}>
            {/* Ground/foundation */}
            <mesh receiveShadow position={[0, -0.05, 0]}>
              <boxGeometry args={[12, 0.1, 12]} />
              <meshStandardMaterial color="#707070" />
            </mesh>
            
            {/* Main tower */}
            <mesh castShadow receiveShadow position={[0, 5, 0]}>
              <boxGeometry args={[5, 10, 5]} />
              <meshPhysicalMaterial color="#b8c4cb" metalness={0.4} roughness={0.2} reflectivity={0.5} />
            </mesh>
            
            {/* Glass panels (windows) */}
            {Array(8).fill(0).map((_, i) => (
              <React.Fragment key={`glass-panel-${i}`}>
                <mesh position={[0, i + 1, 2.51]} castShadow>
                  <boxGeometry args={[4.5, 0.9, 0.05]} />
                  <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.4} transmission={0.9} reflectivity={1} />
                </mesh>
                <mesh position={[0, i + 1, -2.51]} castShadow>
                  <boxGeometry args={[4.5, 0.9, 0.05]} />
                  <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.4} transmission={0.9} reflectivity={1} />
                </mesh>
                <mesh position={[2.51, i + 1, 0]} castShadow>
                  <boxGeometry args={[0.05, 0.9, 4.5]} />
                  <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.4} transmission={0.9} reflectivity={1} />
                </mesh>
                <mesh position={[-2.51, i + 1, 0]} castShadow>
                  <boxGeometry args={[0.05, 0.9, 4.5]} />
                  <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.4} transmission={0.9} reflectivity={1} />
                </mesh>
              </React.Fragment>
            ))}
            
            {/* Roof */}
            <mesh position={[0, 10.1, 0]} castShadow>
              <boxGeometry args={[6, 0.5, 6]} />
              <meshStandardMaterial color="#505a64" />
            </mesh>
            
            {/* Entrance */}
            <mesh position={[0, 0.8, 2.6]} castShadow>
              <boxGeometry args={[2, 1.6, 0.2]} />
              <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.2} transmission={0.9} />
            </mesh>
            
            {/* Surrounding smaller buildings */}
            {[[- 4, 0, 4], [4, 0, -4], [-4, 0, -4]].map((pos, i) => (
              <mesh key={`building-${i}`} position={[pos[0], pos[1], pos[2]]} castShadow>
                <boxGeometry args={[2, 2 + Math.random() * 2, 2]} />
                <meshStandardMaterial color={i % 2 === 0 ? "#a0a0a0" : "#909090"} metalness={0.3} roughness={0.7} />
              </mesh>
            ))}
          </group>
        );
      
      case "Cultural":
        return (
          <group ref={group} position={[0, 0, 0]}>
            {/* Ground/foundation */}
            <mesh receiveShadow position={[0, -0.05, 0]}>
              <boxGeometry args={[15, 0.1, 15]} />
              <meshStandardMaterial color="#d4c9ad" />
            </mesh>
            
            {/* Main gallery structure - curved walls */}
            <mesh castShadow receiveShadow position={[0, 1.5, 0]}>
              <cylinderGeometry args={[5, 5, 3, 32, 1, true]} />
              <meshStandardMaterial color="#f5f5f5" side={THREE.DoubleSide} />
            </mesh>
            
            {/* Roof - dome */}
            <mesh castShadow position={[0, 3, 0]}>
              <sphereGeometry args={[5, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
              <meshStandardMaterial color="#e8e8e8" side={THREE.DoubleSide} metalness={0.1} roughness={0.8} />
            </mesh>
            
            {/* Central skylight */}
            <mesh position={[0, 7.95, 0]} rotation={[Math.PI, 0, 0]}>
              <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
              <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.2} transmission={0.9} />
            </mesh>
            
            {/* Steps */}
            {[0, 1, 2].map((level) => (
              <mesh key={`step-${level}`} receiveShadow position={[0, level * 0.2, 6 - level * 0.5]}>
                <boxGeometry args={[6 - level * 0.5, 0.2, 0.5]} />
                <meshStandardMaterial color="#e0e0e0" />
              </mesh>
            ))}
            
            {/* Columns */}
            {[-4, -2, 0, 2, 4].map((x, i) => (
              <mesh key={`column-${i}`} castShadow position={[x, 1.5, 5]}>
                <cylinderGeometry args={[0.3, 0.3, 3, 16]} />
                <meshStandardMaterial color="#f0f0f0" metalness={0.1} roughness={0.2} />
              </mesh>
            ))}
            
            {/* Display stands */}
            {[[-2, -2], [2, -2], [0, 0], [-2, 2], [2, 2]].map((pos, i) => (
              <mesh key={`stand-${i}`} castShadow position={[pos[0], 0.75, pos[1]]}>
                <boxGeometry args={[1, 1.5, 1]} />
                <meshStandardMaterial color="#d8d8d8" />
                <mesh position={[0, 0.8, 0]}>
                  <boxGeometry args={[0.6, 0.2, 0.6]} />
                  <meshStandardMaterial color="#afafaf" />
                </mesh>
              </mesh>
            ))}
          </group>
        );
      
      case "Hospitality":
        return (
          <group ref={group} position={[0, 0, 0]}>
            {/* Ground/foundation */}
            <mesh receiveShadow position={[0, -0.05, 0]}>
              <boxGeometry args={[20, 0.1, 20]} />
              <meshStandardMaterial color="#c2b280" />
            </mesh>
            
            {/* Main hotel building */}
            <mesh castShadow receiveShadow position={[0, 3, -2]}>
              <boxGeometry args={[10, 6, 6]} />
              <meshStandardMaterial color="#f0ece2" metalness={0.1} roughness={0.8} />
            </mesh>
            
            {/* Hotel Windows */}
            {Array(3).fill(0).map((_, floor) => 
              Array(5).fill(0).map((_, room) => (
                <mesh 
                  key={`window-${floor}-${room}`} 
                  position={[room * 2 - 4, floor * 2 + 1, 1.01]} 
                  castShadow
                >
                  <boxGeometry args={[0.8, 0.8, 0.05]} />
                  <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.2} transmission={0.9} />
                </mesh>
              ))
            )}
            
            {/* Reception/Lobby area */}
            <mesh castShadow receiveShadow position={[0, 1, 3]}>
              <boxGeometry args={[8, 2, 4]} />
              <meshStandardMaterial color="#f0ece2" metalness={0.1} roughness={0.8} />
            </mesh>
            
            {/* Glass entrance */}
            <mesh position={[0, 1, 5.01]} castShadow>
              <boxGeometry args={[4, 1.8, 0.1]} />
              <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.3} transmission={0.9} />
            </mesh>
            
            {/* Pool area */}
            <mesh position={[0, 0, 8]} rotation={[Math.PI / 2, 0, 0]} receiveShadow>
              <boxGeometry args={[6, 3, 0.2]} />
              <meshPhysicalMaterial color="#0099ff" roughness={0} metalness={0.1} transmission={0.9} opacity={0.8} />
            </mesh>
            
            {/* Deck chairs */}
            {[-2, 0, 2].map((x, i) => (
              <group key={`chair-${i}`} position={[x, 0.2, 9.5]}>
                <mesh castShadow>
                  <boxGeometry args={[0.8, 0.1, 1.8]} />
                  <meshStandardMaterial color="#d2b48c" />
                </mesh>
                <mesh castShadow position={[-0.3, 0.3, -0.7]} rotation={[Math.PI/8, 0, 0]}>
                  <boxGeometry args={[0.8, 0.1, 0.8]} />
                  <meshStandardMaterial color="#d2b48c" />
                </mesh>
              </group>
            ))}
            
            {/* Palm trees */}
            {[[-5, 7], [5, 7], [-5, -5], [5, -5]].map((pos, i) => (
              <group key={`palm-${i}`} position={[pos[0], 0, pos[1]]}>
                <mesh castShadow>
                  <cylinderGeometry args={[0.2, 0.3, 2.5, 8]} />
                  <meshStandardMaterial color="#8b4513" />
                </mesh>
                {[0, 1, 2, 3].map((_, j) => (
                  <mesh 
                    key={`leaf-${i}-${j}`} 
                    position={[0, 2 + j * 0.2, 0]} 
                    rotation={[Math.PI/6, j * Math.PI/2, 0]}
                  >
                    <boxGeometry args={[0.1, 0.05, 1.2]} />
                    <meshStandardMaterial color="#2e8b57" />
                  </mesh>
                ))}
              </group>
            ))}
          </group>
        );
      
      case "Multi-Residential":
        return (
          <group ref={group} position={[0, 0, 0]}>
            {/* Ground/foundation */}
            <mesh receiveShadow position={[0, -0.05, 0]}>
              <boxGeometry args={[15, 0.1, 15]} />
              <meshStandardMaterial color="#7d8471" />
            </mesh>
            
            {/* Main apartment buildings */}
            {[[-3, 0, 2], [3, 0, 2], [0, 0, -3]].map((pos, i) => (
              <group key={`building-${i}`} position={[pos[0], pos[1], pos[2]]}>
                {/* Building structure */}
                <mesh castShadow receiveShadow position={[0, 3 + i % 2, 0]}>
                  <boxGeometry args={[4, 6 + i % 3, 4]} />
                  <meshStandardMaterial color={i % 2 === 0 ? "#e8e3d9" : "#dad4c7"} metalness={0.1} roughness={0.8} />
                </mesh>
                
                {/* Windows */}
                {Array(4).fill(0).map((_, floor) => 
                  Array(3).fill(0).map((_, room) => (
                    <React.Fragment key={`windows-${i}-${floor}-${room}`}>
                      <mesh position={[room * 1.2 - 1.2, floor * 1.5 + 1, 2.01]} castShadow>
                        <boxGeometry args={[0.8, 0.8, 0.05]} />
                        <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.2} transmission={0.9} />
                      </mesh>
                      <mesh position={[room * 1.2 - 1.2, floor * 1.5 + 1, -2.01]} castShadow>
                        <boxGeometry args={[0.8, 0.8, 0.05]} />
                        <meshPhysicalMaterial color="#88b6dc" roughness={0} metalness={0.2} transmission={0.9} />
                      </mesh>
                    </React.Fragment>
                  ))
                )}
                
                {/* Balconies */}
                {Array(4).fill(0).map((_, floor) => 
                  floor % 2 === 0 ? (
                    <mesh key={`balcony-${i}-${floor}`} position={[0, floor * 1.5 + 1, 2.3]} castShadow receiveShadow>
                      <boxGeometry args={[3.8, 0.1, 0.8]} />
                      <meshStandardMaterial color="#9a9a9a" />
                      
                      {/* Railings */}
                      <mesh position={[0, 0.5, 0]}>
                        <boxGeometry args={[3.8, 0.05, 0.05]} />
                        <meshStandardMaterial color="#d0d0d0" />
                      </mesh>
                      {Array(4).fill(0).map((_, post) => (
                        <mesh key={`post-${i}-${floor}-${post}`} position={[post * 1.2 - 1.8, 0.25, 0]}>
                          <boxGeometry args={[0.05, 0.5, 0.05]} />
                          <meshStandardMaterial color="#d0d0d0" />
                        </mesh>
                      ))}
                    </mesh>
                  ) : null
                )}
              </group>
            ))}
            
            {/* Shared garden space */}
            <mesh position={[0, 0, 0]} receiveShadow>
              <circleGeometry args={[3, 32]} />
              <meshStandardMaterial color="#7caa63" />
            </mesh>
            
            {/* Garden features */}
            <mesh position={[0, 0.1, 0]} castShadow>
              <cylinderGeometry args={[0.8, 1, 0.2, 32]} />
              <meshStandardMaterial color="#9a9a9a" />
              <mesh position={[0, 0.1, 0]}>
                <cylinderGeometry args={[0.6, 0.6, 0.1, 32]} />
                <meshPhysicalMaterial color="#0099ff" roughness={0} metalness={0.1} transmission={0.9} />
              </mesh>
            </mesh>
            
            {/* Trees */}
            {[[-2, 0], [2, 1], [0, -2], [1, 2]].map((pos, i) => (
              <group key={`tree-${i}`} position={[pos[0], 0, pos[1]]}>
                <mesh castShadow>
                  <cylinderGeometry args={[0.1, 0.15, 1, 8]} />
                  <meshStandardMaterial color="#8b4513" />
                </mesh>
                <mesh position={[0, 1, 0]} castShadow>
                  <coneGeometry args={[0.5, 1, 8]} />
                  <meshStandardMaterial color="#2e8b57" />
                </mesh>
              </group>
            ))}
          </group>
        );
      
      default:
        return (
          <mesh ref={group as any} castShadow receiveShadow>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#d3d3d3" metalness={0.1} roughness={0.8} />
          </mesh>
        );
    }
  };

  return getModel();
}

// Model component that tries to load GLB file
function Model({ url }: { url: string }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  // Try to load the model
  try {
    const { scene } = useGLTF(url);
    
    useEffect(() => {
      scene.traverse((obj) => {
        if (obj.type === 'Mesh') {
          obj.castShadow = true;
          obj.receiveShadow = true;
        }
      });
      setLoading(false);
    }, [scene]);

    if (error) return null;
    return <primitive object={scene} scale={1.5} position={[0, -2, 0]} />;
  } catch (e) {
    // If model loading fails, we'll render nothing and let FallbackModel handle it
    console.error(`Failed to load model: ${url}`, e);
    setError(true);
    return null;
  }
}

// Scene component with camera controls
function Scene({ projectId, category }: { projectId: number, category: string }) {
  const bounds = useBounds();
  const [modelError, setModelError] = useState(false);
  const modelUrl = projectModels[projectId];
  const categoryModelUrl = categoryModels[category] || "/models/residential_default.glb";

  const handleError = () => {
    console.error(`Failed to load model for project ${projectId}`);
    setModelError(true);
  };

  return (
    <group>
      <ambientLight intensity={0.7} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1.5} 
        castShadow 
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight 
        position={[-10, 10, -5]} 
        intensity={0.5} 
        castShadow 
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Try to load the main project model */}
      {modelUrl && !modelError ? (
        <ErrorBoundary onError={handleError}>
          <Model url={modelUrl} />
        </ErrorBoundary>
      ) : (
        // If no model available, try category model
        <ErrorBoundary onError={() => {
          console.log("Falling back to enhanced primitive model");
        }}>
          <EnhancedModel category={category} />
        </ErrorBoundary>
      )}

      <gridHelper args={[30, 30, "#555555", "#333333"]} position={[0, -2, 0]} />
      <OrbitControls 
        enableZoom={true} 
        enablePan={false} 
        autoRotate 
        autoRotateSpeed={0.5}
        minDistance={5}
        maxDistance={20}
      />
    </group>
  );
}

export default function ProjectModel({ 
  projectId, 
  category = "Residential"
}: { 
  projectId: number,
  category?: string 
}) {
  return (
    <div className="w-full h-[400px] md:h-[500px] bg-black/5 rounded-lg overflow-hidden">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ position: [10, 10, 10], fov: 50 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Scene projectId={projectId} category={category} />
          <Environment preset="city" />
          <fog attach="fog" args={["#202030", 10, 30]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Loading spinner component
function LoadingSpinner() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-primary">
        <Loader2 className="h-10 w-10 animate-spin" />
        <p className="mt-2 text-sm font-medium">Loading 3D Model...</p>
      </div>
    </Html>
  );
}

// Simple error boundary to catch model loading errors
class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  onError: () => void;
}> {
  componentDidCatch(error: any) {
    this.props.onError();
  }

  render() {
    return this.props.children;
  }
}
