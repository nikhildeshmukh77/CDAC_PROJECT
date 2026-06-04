
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      {/* <Route path="/Home" element={<Home />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/AboutUs" element={<About Us />} />
      <Route path="/Contact" element={<Contact />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App;