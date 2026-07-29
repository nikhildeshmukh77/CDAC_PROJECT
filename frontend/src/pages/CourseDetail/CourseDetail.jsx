import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "./CourseDetail.css";

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


function AccordionItem({ lesson, isOpen, onToggle }) {

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

          {lesson.title}

        </div>


        <div className="accordion-right">
          1 lecture
        </div>


      </button>


      {
        isOpen && (

          <div className="accordion-body">

            <span>📹</span>

            <span>
              {lesson.description}
            </span>

          </div>

        )
      }


    </div>
  );
}



function CourseDetail() {

  const { id } = useParams();


  const [course, setCourse] = useState(null);

  const [openSection, setOpenSection] = useState(null);

  const [allOpen, setAllOpen] = useState(false);

  const [addedToCart, setAddedToCart] = useState(false);



  useEffect(() => {

    fetch(`http://localhost:9999/api/courses/${id}/player`)

      .then((response) => response.json())

      .then((data) => {

        setCourse(data);

      })

      .catch((error) => {

        console.log("Error fetching course:", error);

      });


  }, [id]);



  if (!course) {

    return (

      <>
        <Navbar />

        <h2 style={{padding:"30px"}}>
          Loading course...
        </h2>

      </>

    );

  }



  const handleToggleAll = () => {

    setAllOpen(!allOpen);

    setOpenSection(null);

  };



  const handleSectionToggle = (index) => {

    setOpenSection(
      openSection === index ? null : index
    );

  };



  const handleAddToCart = () => {

    setAddedToCart(!addedToCart);

  };



  return (

    <>

      <Navbar />


      <div className="course-detail-page">


        <div className="course-hero">


          <div className="course-breadcrumb">

            <a>Home</a>

            <span>/</span>

            <a>Learning</a>

            <span>/</span>

            <span className="active">
              Web Development
            </span>

          </div>



          <div className="course-hero-inner">



            <div className="course-hero-left">


              <h1>
                {course.title}
              </h1>



              <p className="course-description">

                {course.description}

              </p>



              <div className="course-rating-row">

                <span className="rating-number">
                  4.5
                </span>


                <StarRating rating={4.5}/>


                <span className="rating-meta">

                  (2 reviews) · Students enrolled

                </span>


              </div>



              <div className="course-meta">


                <p>

                  Created By{" "}

                  <span className="instructor-link">

                    KnowledgeGarden Team

                  </span>


                </p>



                <p>

                  🌐 English

                </p>


              </div>


            </div>





            <div className="pricing-card">


              <div className="pricing-thumbnail">

                <span>⚡</span>

                <span>🟢</span>

              </div>




              <div className="pricing-body">


                <p className="price">

                  Rs. 499

                </p>



                <Link
                  to={`/course/player/${id}`}
                  className="btn-buy"
                >

                  Start Learning

                </Link>




                <button

                  className={`btn-cart ${addedToCart ? "added" : ""}`}

                  onClick={handleAddToCart}

                >

                  {
                    addedToCart
                    ?
                    "✓ Added to Cart"
                    :
                    "Add to Cart"
                  }


                </button>



                <p className="money-back">

                  30-Day Money-Back Guarantee

                </p>



              </div>


            </div>



          </div>


        </div>






        <div className="course-body">


          <div className="learn-section">

            <h2>
              What you'll learn
            </h2>


            <p>

              Learn {course.title} with practical examples.

            </p>


          </div>






          <div className="content-section">


            <h2>
              Course Content
            </h2>




            <div className="content-meta-row">


              <span>

                {course.lessons.length} lecture(s)

              </span>



              <button

                className="btn-toggle-all"

                onClick={handleToggleAll}

              >

                {
                  allOpen
                  ?
                  "Collapse all sections"
                  :
                  "Expand all sections"
                }


              </button>



            </div>






            <div className="accordion-wrapper">


              {
                course.lessons.map((lesson,index)=>(


                  <AccordionItem

                    key={lesson.id}

                    lesson={lesson}

                    isOpen={
                      allOpen || openSection === index
                    }

                    onToggle={
                      ()=>handleSectionToggle(index)
                    }

                  />


                ))
              }



            </div>


          </div>



        </div>



      </div>


    </>

  );

}



export default CourseDetail;