import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../../components/Navbar";
import VideoPlayer from "../../components/VideoPlayer";
import CourseSidebar from "../../components/CourseSidebar";
import CourseInfo from "../../components/CourseInfo";

import { getCoursePlayer } from "../../services/courseService";

import "./CoursePlayer.css";

function CoursePlayer() {
  const { courseId } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [activeVideoUrl, setActiveVideoUrl] = useState("");

  const loadCourse = async () => {
    try {
      const data = await getCoursePlayer(courseId);

      setCourse(data);
      setLessons(data.lessons);

      if (data.lessons && data.lessons.length > 0) {
        setActiveVideoUrl(data.lessons[0].s3Key);
      }
    } catch (err) {
      if (err.response && err.response.status === 403) {
        navigate("/login", { state: { message: "Please log in to access this course." } });
      } else {
        console.error("Error loading course:", err);
      }
    }
  };

  useEffect(() => {
    loadCourse();
  }, [courseId]);

  if (!course) {
    return (
      <>
        <Navbar />
        <h2 style={{ padding: "30px" }}>Loading...</h2>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="player-page-container">
        <div className="learning-row">
          <div className="video-viewport-wrapper">
            <VideoPlayer videoUrl={activeVideoUrl} />
          </div>

          <div className="sidebar-list-wrapper">
            <CourseSidebar
              lessons={lessons}
              onLectureSelect={(lesson) => {
                setActiveVideoUrl(lesson.s3Key);
              }}
            />
          </div>
        </div>

        <div className="course-details-section">
          <CourseInfo course={course} />
        </div>
      </div>
    </>
  );
}

export default CoursePlayer;