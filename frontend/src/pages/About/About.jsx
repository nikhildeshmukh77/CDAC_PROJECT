import Navbar from "../../components/Navbar";
import "./About.css";

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">
        <section className="about-section">
          <h1>About KnowledgeGarden</h1>
          <p>
            KnowledgeGarden is an academic frontend project built for an online
            learning platform. It provides pages for login, registration, course
            browsing, and basic information about the platform.
          </p>
          <p>
            The main purpose of this project is to demonstrate React components,
            routing, forms, page layout, and reusable navigation in a simple way.
          </p>
        </section>

        <section className="about-values">
          <div>
            <h3>Our Aim</h3>
            <p>To make learning resources easy to access for students.</p>
          </div>
          <div>
            <h3>Our Users</h3>
            <p>Students can explore courses and teachers can support learning.</p>
          </div>
          <div>
            <h3>Our Focus</h3>
            <p>Simple design, clear navigation, and useful academic features.</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
