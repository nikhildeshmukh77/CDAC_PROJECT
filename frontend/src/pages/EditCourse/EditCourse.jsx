import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../../services/apiClient";

function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState({
    title: "",
    description: "",
    price: ""
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await apiClient.get(`/courses/${id}`);
        setCourse(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCourse();
  }, [id]);

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const updateCourse = async (e) => {
    e.preventDefault();

    try {
      await apiClient.put(`/courses/${id}`, course);

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
