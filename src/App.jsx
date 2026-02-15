

import './index.css'

import Navbar from './components/Navbar'
import Home from './components/Home'

import { Route, Routes } from 'react-router-dom'
import Projects from './components/Projects'
import Vision from './components/Vision'
import Stories from './components/Stories'
import Blogs from './components/Blogs'


function App() {

 

  

  return (
    <>
      

      <Navbar/>
      
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/vision" element={<Vision/>} />
       
       <Route path="/stories" element={<Stories/>} />
       <Route path="/projects" element={<Projects/>}  />
       <Route path="/projects" element={<Projects/>} />
        <Route path="/blogs" element={<Blogs/>} />
      
      </Routes>
   
   






    </>
  )
}

export default App
