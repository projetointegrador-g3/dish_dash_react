import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import NavbarInicio from "./components/navbarInicial/NavbarInicio";
import Login from "./pages/login/Login";
import Sobre from "./pages/sobre/Sobre";
import Sidebar from "./components/sidebar/Sidebar";
import Inicio from "./pages/inicio/Inicio";
import Perfil from "./components/perfil/Perfil";
import Configuracao from "./components/settings/Configuracao";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import ListaProdutos from "./components/produtos/listaprodutos/ListaProdutos";
import FormProdutos from "./components/produtos/formprodutos/FormProdutos";
import DeletarProduto from "./components/produtos/deletarproduto/DeletarProduto";
import ListarProdutosPorNome from "./components/produtos/listarprodutopornome/ListarProdutosPorNome";



export default function App() {
  const location = useLocation(); // Obtém a localização atual do navegador.
  const hideNavbarAndSidebar = ["/login", "/", "/sobre"].includes(location.pathname); // Verifica se a Navbar e Sidebar devem ser ocultadas.
  const noPaddingPages = ["/", "/login", "/sobre"]; // Define páginas que não devem ter padding.

  return (
    <>
      <ToastContainer /> 

      <div>
        <div className="flex h-screen overflow-hidden">
          {!hideNavbarAndSidebar && <Sidebar />} {/* Renderiza o Sidebar, se necessário. */}

          <div className={`flex flex-col flex-1 ${!hideNavbarAndSidebar ? 'ml-20' : ''}`}>

            {/* Renderiza o Navbar, exceto nas páginas de login, inicial e sobre */}
            {location.pathname !== "/login" && location.pathname !== "/" && location.pathname !== "/sobre" && <Navbar />}
            
            {/* Renderiza o NavbarInicio nas páginas inicial e sobre */}
            {(location.pathname === "/" || location.pathname === "/sobre") && <NavbarInicio />}
            
            <div className={`flex-1 overflow-auto ${noPaddingPages.includes(location.pathname) ? 'p-0' : 'p-6'}`}>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/home" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/login" element={<Login />} />
                <Route path="/categorias" element={<ListarCategorias />} />
                <Route path="/cadastrarcategoria" element={<FormCategoria/>} />
                <Route path="/editarcategoria/:id" element={<FormCategoria/>} />
                <Route path="/deletarcategoria/:id" element={<DeletarCategoria/>} />
                <Route path="/produtos" element={<ListaProdutos />} />  
                <Route path="/cadastrarproduto" element={<FormProdutos />} /> 
                <Route path="/editarproduto/:id" element={<FormProdutos />} />
                <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
                <Route path="/consultarnome/:nome" element={<ListarProdutosPorNome />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/configuracoes" element={<Configuracao />} />
              </Routes> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}