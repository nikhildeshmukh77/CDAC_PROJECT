import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../../components/Navbar";
import "./InstructorDashboard.css";

function InstructorDashboard() {
  const navigate = useNavigate();

  const [instructorName, setInstructorName] = useState("");
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9998/api/courses/instructor/3"
      );

      console.log("Response Data:", response.data);

      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    const storedUser = window.sessionStorage.getItem("loggedInUser");
    const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

    setInstructorName(loggedInUser ? loggedInUser.name : "Instructor");

    fetchCourses();
  }, [navigate]);

  const handleDelete = async (courseId) => {

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this course?"
  );

  if (!confirmDelete) {
    return;
  }

  try {

    await axios.delete(
      `http://localhost:9998/api/courses/${courseId}`
    );

    alert("Course deleted successfully.");

    fetchCourses();

  } catch (error) {

    console.error("Error deleting course:", error);
    alert("Failed to delete course.");

  }

};


  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <p className="sidebar-link active">Dashboard</p>
          <p className="sidebar-link">Profile</p>
          <p className="sidebar-link">Logout</p>
        </div>

        <div className="dashboard-main">
          <div className="dashboard-header">
            <div>
              <h2>Welcome back, {instructorName}</h2>
              <p className="subtitle">
                Here's how your courses are performing
              </p>
            </div>

            <Link to="/addcourse">
              <button className="add-course-btn">
                <FaPlus /> Add New Course
              </button>
            </Link>
          </div>

          <h3>My Courses</h3>

          <table className="courses-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>Students</th>
                <th>Rating</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {courses.length === 0 ? (
                <tr>
                  <td colSpan="5">No courses added yet</td>
                </tr>
              ) : (
                courses.map((course) => (
                  <tr key={course.id}>
                    <td>{course.title}</td>

                    <td>{course.studentsEnrolled}</td>

                    <td>{course.rating}</td>

                    <td>₹ {course.price}</td>

                    <td className="actions">
                      <Link to={`/editcourse/${course.id}`}>
                        <FaEdit className="icon" />
                      </Link>

                      <FaTrash
                        className="icon"
                        onClick={() => handleDelete(course.id)}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default InstructorDashboard;