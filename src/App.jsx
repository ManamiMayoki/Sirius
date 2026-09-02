
import './App.css'
import Dog from './components/Dog.jsx'
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <>
      <main>
        <Canvas style={{
          height: '100vh',
          width: '100vw',
          position: 'absolute',
          top: 0,
          left: 0
        }}>
          {/* <Dog /> */}
        </Canvas>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </>

  )
}
export default App