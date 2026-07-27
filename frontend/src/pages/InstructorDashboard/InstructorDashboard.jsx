import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import "./InstructorDashboard.css";

function InstructorDashboard() {
  const navigate = useNavigate();
  const [instructorName, setInstructorName] = useState("");
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const storedUser = window.sessionStorage.getItem("loggedInUser");
    const loggedInUser = storedUser ? JSON.parse(storedUser) : null;

    // if (!loggedInUser) {
    //   window.alert("Please login first");
    //   navigate("/login");
    //   return;
    // }

    // setInstructorName(loggedInUser.name);
     setInstructorName(loggedInUser ? loggedInUser.name : "Instructor");

    const storedCourses = window.sessionStorage.getItem("instructorCourses");
    const parsedCourses = storedCourses ? JSON.parse(storedCourses) : [];
    setCourses(parsedCourses);
  }, [navigate]);

  const handleDelete = (courseId) => {
    const confirmDelete = window.confirm("Delete this course?");
    if (!confirmDelete) {
      return;
    }

    const updatedCourses = courses.filter((course) => course.id !== courseId);
    setCourses(updatedCourses);
    window.sessionStorage.setItem(
      "instructorCourses",
      JSON.stringify(updatedCourses)
    );
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
              <p className="subtitle">Here's how your courses are performing</p>
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
                <th>Status</th>
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
                    <td>
                      <span className={`status ${course.status}`}>
                        {course.status}
                      </span>
                    </td>
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
