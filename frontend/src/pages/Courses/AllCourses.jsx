import Navbar from "../../components/Navbar";
import CoursesCart from "../../components/CoursesCart";
import "./AllCourses.css";

function Courses() {
  const courseItems = [
    {
      id: 1,
      name: "React JS Masterclass",
      author: "John Doe",
      rating: 4.8,
      price: 1999,
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      name: "Node.js & Express",
      author: "Jane Smith",
      rating: 4.7,
      price: 2499,
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      id: 3,
      name: "MongoDB Essentials",
      author: "Rahul Sharma",
      rating: 4.5,
      price: 1499,
      image: "https://picsum.photos/300/200?random=3",
    },
    {
      id: 4,
      name: "Full Stack MERN Bootcamp",
      author: "Priya Patel",
      rating: 4.9,
      price: 3999,
      image: "https://picsum.photos/300/200?random=4",
    },
  ];

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
