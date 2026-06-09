import { useState } from "react";

import Navbar from "../../components/Navbar.jsx";
import VideoPlayer from "../../components/VideoPlayer.jsx";
import CourseSidebar from "../../components/CourseSidebar.jsx";
import CourseInfo from "../../components/CourseInfo.jsx";

import "./CoursePlayer.css";

function CoursePlayer() {
  // Set the default state to a real working link to eliminate the black screen
  const [activeVideoUrl, setActiveVideoUrl] = useState(
    "https://www.youtube.com/embed/jmhRD1R8MBw?si=vHJKVuuLiNBTcId4"
  );

  return (
    <>
      <Navbar />

      <div className="player-page-container">
        <div className="learning-row">
          <div className="video-viewport-wrapper">
            <VideoPlayer videoUrl={activeVideoUrl} />
          </div>

          <div className="sidebar-list-wrapper">
            <CourseSidebar onLectureSelect={setActiveVideoUrl} />
          </div>
        </div>

        <div className="course-details-section">
          <CourseInfo />
        </div>
      </div>
    </>
  );
}

export default CoursePlayer;
