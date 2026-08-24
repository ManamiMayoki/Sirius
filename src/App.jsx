import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Dog from './components/Dog'
import './App.css'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Dog />
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App