import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import Home from "./pages/home/Home"
import Categorias from "./components/categorias/Categorias"
import Navbar from "./components/navbar/Navbar"

function App() {
  return (
    <>
     <ToastContainer />
     <Navbar />
     
     <div className='min-h-[89vh]'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='categorias' element={<Categorias />} />Categorias
      </Routes>
     </div>
    </>
  )
}

export default App
/*function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
  
        </Route>
      </Routes>
      
      
    </>
  )
}

export default App*/