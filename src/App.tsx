import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Home from "./pages/home/Home"


function App() {

  return (
    <>
      <ToastContainer />

      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
  
        </Route>
      </Routes>
    </>
  )
}

export default App
