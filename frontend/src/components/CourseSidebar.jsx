import "./CourseSidebar.css";

function CourseSidebar({ lessons, onLectureSelect }) {

  return (

    <div className="sidebar-container">

      <h3 className="sidebar-title">
        Course Content
      </h3>


      <ul className="sidebar-list">


        {
          lessons.map((lesson) => (

            <li

              key={lesson.id}

              className="sidebar-item"

              onClick={() => onLectureSelect(lesson)}

            >

              {lesson.title}

            </li>

          ))
        }


      </ul>


    </div>

  );

}


export default CourseSidebar;