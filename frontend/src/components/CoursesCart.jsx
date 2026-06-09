import { Link } from "react-router-dom";

function CoursesCart({ course }) {
  return (
    <article className="course-card">
      <img src={course.image} className="course-image" alt={course.name} />
      <div className="course-card-body">
        <h3>{course.name}</h3>
        <p>{course.author}</p>
        <p>Rating: {course.rating}</p>
        <p>Rs. {course.price}</p>
        <Link to={`/course/${course.id}`} className="course-link">
          View Details
        </Link>
      </div>
    </article>
  );
}

export default CoursesCart;
