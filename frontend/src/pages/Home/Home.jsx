import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import student from "../../assets/student.png";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main className="home-page">
        <section className="home-hero">
          <div className="home-content">
            <p className="home-tag">Online Learning Platform</p>
            <h1>Welcome to KnowledgeGarden</h1>
            <p>
              A simple place for students and teachers to explore courses,
              learn new skills, and manage academic learning in one platform.
            </p>

            <div className="home-actions">
              <Link to="/allcourses">View Courses</Link>
              <Link to="/register" className="secondary-action">Join Now</Link>
            </div>
          </div>

          <div className="home-image">
            <img src={student} alt="Student learning online" />
          </div>
        </section>

        <section className="home-features">
          <div>
            <h3>Quality Courses</h3>
            <p>Browse useful courses for programming and full stack development.</p>
          </div>
          <div>
            <h3>Student Friendly</h3>
            <p>Clean pages, simple navigation, and easy account creation.</p>
          </div>
          <div>
            <h3>Teacher Support</h3>
            <p>Designed to support both students and teachers in one system.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
