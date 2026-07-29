import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Instructorcourseupload.css";

const newLesson = () => ({
  _id: crypto.randomUUID(),
  title: "",
  content: "",
  file: null,
  uploadProgress: 0,
  uploading: false,
  done: false,
});

export default function InstructorCourseUpload() {
  const [course, setCourse] = useState({ title: "", description: "", price: "" });
  const [lessons, setLessons] = useState([newLesson()]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const fileRefs = useRef({});

  const updateCourse = (field, value) =>
    setCourse((prev) => ({ ...prev, [field]: value }));

  const updateLesson = (id, field, value) =>
    setLessons((prev) =>
      prev.map((l) => (l._id === id ? { ...l, [field]: value } : l))
    );

  const addLesson = () => setLessons((prev) => [...prev, newLesson()]);

  const removeLesson = (id) =>
    setLessons((prev) => prev.filter((l) => l._id !== id));

  const handleFileSelect = (id, file) => {
    if (!file || !file.type.startsWith("video/")) return;

    updateLesson(id, "file", file);
    updateLesson(id, "done", false);
  };


  const validate = () => {
    if (!course.title.trim()) return "Course title is required.";
    if (!course.description.trim()) return "Course description is required.";
    if (!course.price || isNaN(Number(course.price)))
      return "Valid price is required.";

    for (const [i, l] of lessons.entries()) {
      if (!l.title.trim()) return `Lesson ${i + 1}: title is required.`;
      if (!l.content.trim()) return `Lesson ${i + 1}: content is required.`;
      if (!l.file) return `Lesson ${i + 1}: video is required.`;
    }

    return "";
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess(false);

    const validationError = validate();

    if (validationError) {
      setError(validationError);
      return;
    }


    setSubmitting(true);

    try {

      const formData = new FormData();


      const courseData = {
        title: course.title,
        description: course.description,
        price: Number(course.price),
        lessons: lessons.map((lesson) => ({
          title: lesson.title,
          description: lesson.content
        }))
      };


      formData.append(
        "course",
        new Blob(
          [JSON.stringify(courseData)],
          {
            type: "application/json"
          }
        )
      );


      lessons.forEach((lesson) => {
        formData.append(
          "videos",
          lesson.file
        );
      });



      const response = await fetch(
        "http://localhost:9998/api/instructor/courses",
        {
          method: "POST",
          body: formData
        }
      );


      if (!response.ok)
        throw new Error("Failed to create course");


      setSuccess(true);

      setCourse({
        title: "",
        description: "",
        price: ""
      });

      setLessons([newLesson()]);


    } catch (err) {

      setError(
        err.message || "Something went wrong."
      );

    } finally {

      setSubmitting(false);

    }
  };


  return (
    <div className="page d-flex justify-content-center">
      <form className="form-card card shadow-lg border-0" onSubmit={handleSubmit}>

        <div className="form-header text-center">
          <h1>Create a New Course</h1>
          <p>Course info is visible before purchase. Lessons unlock after purchase.</p>
        </div>


        <div className="section">
          <p className="section-title">Course Information</p>

          <div className="field mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Complete React Developer Bootcamp"
              value={course.title}
              onChange={(e) => updateCourse("title", e.target.value)}
            />
          </div>


          <div className="field mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              placeholder="What will students learn?"
              value={course.description}
              onChange={(e) => updateCourse("description", e.target.value)}
            />
          </div>


          <div className="field field-half mb-3">
            <label className="form-label">Price (INR)</label>
            <div className="price-wrap input-group">
              <span className="input-group-text">Rs.</span>
              <input
                type="number"
                className="form-control"
                min="0"
                step="0.01"
                placeholder="49.99"
                value={course.price}
                onChange={(e) => updateCourse("price", e.target.value)}
              />
            </div>
          </div>

        </div>



        <div className="section">

          <div className="lessons-header d-flex justify-content-between align-items-center flex-wrap gap-2">

            <p className="section-title mb-0">
              Lessons
            </p>

            <button
              type="button"
              className="btn btn-add-lesson"
              onClick={addLesson}
            >
              + Add Lesson
            </button>

          </div>



          {lessons.map((lesson, idx) => (

            <div className="lesson-card card" key={lesson._id}>

              <div className="lesson-card-header d-flex justify-content-between align-items-center">

                <span className="lesson-num">
                  Lesson {idx + 1}
                </span>


                {lessons.length > 1 && (

                  <button
                    type="button"
                    className="btn btn-remove"
                    onClick={() => removeLesson(lesson._id)}
                  >
                    ×
                  </button>

                )}

              </div>



              <div className="field mb-3">

                <label className="form-label">Title</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Lesson title"
                  value={lesson.title}
                  onChange={(e) =>
                    updateLesson(
                      lesson._id,
                      "title",
                      e.target.value
                    )
                  }
                />

              </div>



              <div className="field mb-3">

                <label className="form-label">Content</label>

                <textarea
                  className="form-control"
                  placeholder="Lesson notes or description"
                  value={lesson.content}
                  onChange={(e) =>
                    updateLesson(
                      lesson._id,
                      "content",
                      e.target.value
                    )
                  }
                />

              </div>



              <div className="field mb-3">

                <label className="form-label">Video</label>


                <input
                  type="file"
                  accept="video/*"
                  style={{ display: "none" }}
                  ref={(el) =>
                    (fileRefs.current[lesson._id] = el)
                  }
                  onChange={(e) =>
                    handleFileSelect(
                      lesson._id,
                      e.target.files?.[0]
                    )
                  }
                />


                {!lesson.file ? (

                  <div
                    className="video-upload-box text-center"
                    onClick={() =>
                      fileRefs.current[lesson._id]?.click()
                    }
                  >
                    <div className="upload-icon">
                      &#8679;
                    </div>

                    <p className="mb-0">
                      Click to select a video file
                    </p>

                  </div>

                ) : (

                  <div className="video-selected d-flex justify-content-between align-items-center">

                    <span>
                      {lesson.file.name}
                    </span>


                    <button
                      type="button"
                      className="btn btn-change"
                      onClick={() =>
                        fileRefs.current[lesson._id]?.click()
                      }
                    >
                      Change
                    </button>


                  </div>

                )}

              </div>


            </div>

          ))}


        </div>



        <div className="form-footer">

          {error && (
            <p className="error-msg">
              {error}
            </p>
          )}


          {success && (
            <p className="success-msg">
              Course published successfully!
            </p>
          )}



          <button
            type="submit"
            className="btn btn-submit w-100"
            disabled={submitting}
          >

            {submitting
              ? "Publishing..."
              : "Publish Course"}

          </button>

        </div>


      </form>
    </div>
  );
}