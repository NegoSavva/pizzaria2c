
import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

const App = () => {

  const [color] = useState("#eb8d04")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Routes path='/inicio' element={<inicio/>} />
    </Routes>
  )
  }

  export default App