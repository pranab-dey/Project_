import React, { useState } from 'react'
import { toast } from 'react-toastify'
import './global.css'

import Slider from './components/slider'

function App() {
  const [slide, setSlide] = useState(0)

  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
      }}
    >
      <Slider
        min={0}
        max={100}
        value={slide}
        step={1}
        handleChange={(e) => {
          setSlide(e.target.value)
        }}
      />
    </div>
  )
}

export default App
