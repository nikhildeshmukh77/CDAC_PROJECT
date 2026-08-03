function CourseInfo({ course }) {
  return (
    <div
      style={{
        background: "#1e293b",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>{course.title}</h2>

      <p>{course.description}</p>

      <h3>Total Lessons : {course.lessons.length}</h3>
    </div>
  );
}

export default CourseInfo;