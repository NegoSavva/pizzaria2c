
import React ,{useState} from "react"
import {Route , Routes} from "react-router-dom"
import home from './pages/Home'

const app = () => {

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