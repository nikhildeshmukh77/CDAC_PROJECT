import "./CourseSidebar.css";

function CourseSidebar({ onLectureSelect }) {
  const lectures = [
  { 
    id: 1, 
    title: "01. Introduction to the .Net", 
    video: "https://www.youtube.com/embed/7QjWqMYf7ac?si=O5vnNj7gOimXJKks" 
  },
  { 
    id: 2, 
    title: "02. Setting up the Environment", 
    video: "https://www.youtube.com/embed/mZUB6nWEIh8?si=d_ghmow8uH_MBwqS" 
  },
  { 
    id: 3, 
    title: "03. Architecture Overview", 
    video: "https://www.youtube.com/embed/MzqNTr0R0ik?si=NxuGkT9lZaRjjfug" 
  }
];

  return (
    <div className="sidebar-container">
      <h3 className="sidebar-title">Course Content</h3>
      <ul className="sidebar-list">
        {lectures.map((lecture) => (
          <li 
            key={lecture.id}
            onClick={() => onLectureSelect(lecture.video)}
            className="sidebar-item"
          >
            {lecture.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseSidebar;