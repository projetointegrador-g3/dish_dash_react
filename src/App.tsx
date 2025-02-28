import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <Sidebar />

        <div className="flex flex-col flex-1 ml-20">
          <Navbar />
          <main className="p-6 flex-1 overflow-auto">
            <Home/>
          </main>
        </div>
      
      </div>
    </BrowserRouter>
    </>
  )
} export default App