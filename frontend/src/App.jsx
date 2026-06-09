import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CourseDetail from "./pages/CourseDetail/CourseDetail"
import Courses from "./pages/Courses/AllCourses";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import CoursePlayer from "./pages/CoursePlaylist/CoursePlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/allcourses" element={<Courses />} />
        <Route path="/AllCourses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
    <Routes>
      
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/course/:id" element={<CourseDetail />} />
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


export default App;"?"
