import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import CoursesCart from "../../components/CoursesCart";
import { getAllCourses } from "../../services/courseService";
import "./AllCourses.css";

function Courses() {
  const [courseItems, setCourseItems] = useState([]);

  useEffect(() => {
    getAllCourses()
      .then((data) => {
        setCourseItems(data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main className="courses-page">
        <h1>All Courses</h1>
        <div className="courses-grid">
          {courseItems.map((course) => (
            <CoursesCart key={course.id} course={course} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Courses;