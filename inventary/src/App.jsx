import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import PersonalData from './pages/PersonalData/PersonalData'
import RegisterProduct from './pages/RegisterProduct/RegisterProduct'
import Inventory from "./pages/Inventory/Inventory";
import EditProduct from "./pages/Inventory/EditProduct";
import Login from "./pages/Login/Login";
function App () {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path = "/home" element= {<Home/>}/>
          <Route path="PersonalData" element= {<PersonalData/>}/>
          <Route path="/RegisterProduct" element={<RegisterProduct/>}/>
          <Route path="inventary" element={<Inventory/>}/>
          <Route path="/editInventary" element = {<EditProduct/>}/>


        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
