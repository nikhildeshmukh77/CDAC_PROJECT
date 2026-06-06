
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CoursePlayer from "./pages/CoursePlaylist/CoursePlayer";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/course" element={<CoursePlayer />} />
      {/* <Route path="/Home" element={<Home />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/AboutUs" element={<About Us />} />
      <Route path="/Contact" element={<Contact />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App;