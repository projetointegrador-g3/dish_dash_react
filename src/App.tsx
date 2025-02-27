import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Inicio from "./pages/inicio/Inicio"


function App() {

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route>
          <Route path="/" element={<Inicio />} />
        </Route>
      </Routes>
      
    </>
  )
}

export default App
