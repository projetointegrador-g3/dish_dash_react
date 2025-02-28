import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home"
import Categorias from "./components/categorias/Categorias"
import Navbar from "./components/navbar/Navbar"
import Login from "./pages/login/Login"
import Sobre from "./pages/sobre/Sobre"
import Sidebar from "./components/sidebar/Sidebar"
import Inicio from "./pages/inicio/Inicio"
import Perfil from "./components/perfil/Perfil"
import Configuracao from "./components/settings/Configuracao"

function App() {
  return (
    <>
    <ToastContainer/>
    <BrowserRouter>
    <div>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        
        <div className="flex flex-col flex-1 ml-20">
          <Navbar />
          <div className="p-6 flex-1 overflow-auto">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/login" element={<Login />} />
                <Route path="/categorias" element={<Categorias />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/configuracoes" element={<Configuracao />} />
           </Routes>
           </div>
          </div>
        </div>
        
      </div>
    </BrowserRouter>
    </>
  )
} export default App