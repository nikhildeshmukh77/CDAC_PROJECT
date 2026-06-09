import "./CourseSidebar.css";

function CourseSidebar({ onLectureSelect }) {
  const lectures = [
  { 
    id: 1, 
    title: "01. Introduction to the .Net", 
    video: "https://www.youtube.com/embed/jmhRD1R8MBw?si=vHJKVuuLiNBTcId4" 
  },
  { 
    id: 2, 
    title: "02. Setting up the Environment", 
    video: "https://www.youtube.com/embed/D6KAlG-cZUs?si=sK0TiprNBCd5Ov11" 
  },
  { 
    id: 3, 
    title: "03. Architecture Overview", 
    video: "https://www.youtube.com/embed/s38lc9tDatY?si=FkiPzViBQ1yXarjM" 
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