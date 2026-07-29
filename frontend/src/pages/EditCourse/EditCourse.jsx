import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    description: "",
    price: ""
  });

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      // Since you don't have GET by courseId,
      // get all courses of instructor and find the selected one
    const response = await axios.get(
    `http://localhost:9998/api/courses/${id}`
);

setCourse(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const updateCourse = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:9998/api/courses/${id}`,
        course
      );

      alert("Course Updated Successfully");

      navigate("/instructordashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "500px", margin: "30px auto" }}>
      <h2>Edit Course</h2>

      <form onSubmit={updateCourse}>

        <label>Title</label>

        <input
          type="text"
          name="title"
          value={course.title}
          onChange={handleChange}
        />

        <br /><br />

        <label>Description</label>

        <textarea
          name="description"
          value={course.description}
          onChange={handleChange}
        />

        <br /><br />

        <label>Price</label>

        <input
          type="number"
          name="price"
          value={course.price}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Course
        </button>

      </form>
    </div>
  );
}

export default EditCourse;

// function EditCourse() {
//   return <h1>Edit Course Page</h1>;
// }

// export default EditCourse;