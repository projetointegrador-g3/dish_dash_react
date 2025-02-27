import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home"
import Login from "./pages/login/Login"


function App() {

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
  
        </Route>
      </Routes>
    </>
  )
}

export default App
