import { useState } from "react";
import Navbar from "../../components/Navbar";
import "./CourseDetail.css";

// ==========================================
//   DUMMY DATA (replace with API call later)
// ==========================================

const course = {
  title: "The Complete MERN Stack Developer Course 2020",
  description:
    "MERN is a free and open-source JavaScript software stack for building dynamic web sites and web applications. Because all components of the MERN stack support programs written in JavaScript, MERN applications can be written in one language for both server-side and client-side execution environments.",
  rating: 4.5,
  reviews: 2,
  students: 2,
  instructor: "Dr. Khondekar Lutful Hassan",
  createdAt: "April 7, 2025 | 6:36 PM",
  language: "English",
  price: 499,
  whatYouLearn:
    "This course is an excellent course for a beginner to MERN or a person that has some experience but not comfortable with the MERN Stack. The examples are simple enough to grasp the important concepts about the MERN Stack.",
  sections: [
    { title: "Introduction",  lectures: 1, duration: "2m 15s" },
    { title: "HTML",          lectures: 1, duration: "2m 15s" },
    { title: "CSS",           lectures: 1, duration: "2m 15s" },
    { title: "Java Script",   lectures: 1, duration: "2m 15s" },
    { title: "React JS",      lectures: 1, duration: "2m 15s" },
    { title: "Express JS",    lectures: 1, duration: "2m 15s" },
    { title: "Node JS",       lectures: 1, duration: "2m 15s" },
  ],
  totalSections: 7,
  totalLectures: 7,
  totalDuration: "15m 49s",
};


// ==========================================
//   STAR RATING COMPONENT
// ==========================================

function StarRating({ rating }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= Math.round(rating) ? "star" : "star empty"}
        >
          ★
        </span>
      ))}
    </div>
  );
}


// ==========================================
//   ACCORDION ITEM COMPONENT
// ==========================================

function AccordionItem({ section, isOpen, onToggle }) {
  return (
    <div className="accordion-item">
      <button
        className={`accordion-header ${isOpen ? "open" : ""}`}
        onClick={onToggle}
      >
        <div className="accordion-left">
          <span className={`accordion-arrow ${isOpen ? "rotated" : ""}`}>
            ▸
          </span>
          {section.title}
        </div>
        <div className="accordion-right">
          {section.lectures} lecture(s) &nbsp; {section.duration}
        </div>
      </button>

      {isOpen && (
        <div className="accordion-body">
          <span>📹</span>
          <span>
            Introduction to {section.title} — {section.duration}
          </span>
        </div>
      )}
    </div>
  );
}


// ==========================================
//   MAIN COURSE DETAIL PAGE
// ==========================================

function CourseDetail() {
  const [openSection, setOpenSection] = useState(null);
  const [allOpen, setAllOpen]         = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleToggleAll = () => {
    setAllOpen(!allOpen);
    setOpenSection(null);
  };

  const handleSectionToggle = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const handleAddToCart = () => {
    setAddedToCart(!addedToCart);
  };

  return (
    <>
      <Navbar />

      <div className="course-detail-page">

        {/* ── HERO BANNER ── */}
        <div className="course-hero">

          {/* Breadcrumb */}
          <div className="course-breadcrumb">
            <a>Home</a>
            <span>/</span>
            <a>Learning</a>
            <span>/</span>
            <span className="active">Web Development</span>
          </div>

          <div className="course-hero-inner">

            {/* Left: Course Info */}
            <div className="course-hero-left">
              <h1>{course.title}</h1>

              <p className="course-description">{course.description}</p>

              <div className="course-rating-row">
                <span className="rating-number">{course.rating}</span>
                <StarRating rating={course.rating} />
                <span className="rating-meta">
                  ({course.reviews} reviews) &nbsp;·&nbsp; {course.students} students enrolled
                </span>
              </div>

              <div className="course-meta">
                <p>
                  Created By&nbsp;
                  <span className="instructor-link">{course.instructor}</span>
                </p>
                <p>🕐 Created at {course.createdAt} &nbsp;|&nbsp; 🌐 {course.language}</p>
              </div>
            </div>

            {/* Right: Pricing Card */}
            <div className="pricing-card">
              <div className="pricing-thumbnail">
                <span>⚡</span>
                <span>🟢</span>
              </div>

              <div className="pricing-body">
                <p className="price">Rs. {course.price}</p>

                <button className="btn-buy">Buy Now</button>

                <button
                  className={`btn-cart ${addedToCart ? "added" : ""}`}
                  onClick={handleAddToCart}
                >
                  {addedToCart ? "✓ Added to Cart" : "Add to Cart"}
                </button>

                <p className="money-back">30-Day Money-Back Guarantee</p>

                <div className="course-includes">
                  <p className="includes-title">This Course Includes —</p>
                  <ul>
                    <li><span>📹</span> Video content on demand</li>
                    <li><span>🌐</span> Full lifetime access</li>
                    <li><span>📱</span> Access on mobile & desktop</li>
                    <li><span>🏆</span> Certificate of completion</li>
                  </ul>
                </div>

                <button className="btn-share">🔗 Share</button>
              </div>
            </div>

          </div>
        </div>
        {/* ── END HERO ── */}


        {/* ── BODY CONTENT ── */}
        <div className="course-body">

          {/* What You'll Learn */}
          <div className="learn-section">
            <h2>What you'll learn</h2>
            <p>{course.whatYouLearn}</p>
          </div>

          {/* Course Content Accordion */}
          <div className="content-section">
            <h2>Course Content</h2>

            <div className="content-meta-row">
              <span>
                {course.totalSections} section(s) &nbsp;•&nbsp;
                {course.totalLectures} lecture(s) &nbsp;•&nbsp;
                {course.totalDuration} total length
              </span>
              <button className="btn-toggle-all" onClick={handleToggleAll}>
                {allOpen ? "Collapse all sections" : "Expand all sections"}
              </button>
            </div>

            <div className="accordion-wrapper">
              {course.sections.map((section, index) => (
                <AccordionItem
                  key={index}
                  section={section}
                  isOpen={allOpen || openSection === index}
                  onToggle={() => handleSectionToggle(index)}
                />
              ))}
            </div>
          </div>

        </div>
        {/* ── END BODY ── */}

      </div>
    </>
  );
}

export default CourseDetail;
