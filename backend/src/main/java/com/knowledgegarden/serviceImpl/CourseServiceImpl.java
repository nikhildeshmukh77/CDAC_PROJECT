package com.knowledgegarden.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.knowledgegarden.entity.Course;
import com.knowledgegarden.repository.CourseRepository;
import com.knowledgegarden.repository.LessonRepository;
import com.knowledgegarden.service.CourseService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

import org.springframework.security.core.Authentication;
import org.springframework.web.multipart.MultipartFile;

import com.knowledgegarden.dto.CourseRequest;
import com.knowledgegarden.dto.CourseResponse;
import com.knowledgegarden.dto.LessonRequest;
import com.knowledgegarden.entity.Lesson;
import com.knowledgegarden.entity.User;
import com.knowledgegarden.repository.UserRepository;
import com.knowledgegarden.service.S3Service;
import java.util.stream.Collectors;

import com.knowledgegarden.dto.CoursePlayerResponse;
import com.knowledgegarden.dto.CourseSummaryResponse;
import com.knowledgegarden.dto.LessonResponse;
@Service
@Transactional
public class CourseServiceImpl implements CourseService {

	
	private final CourseRepository courseRepository;
	private final LessonRepository lessonRepository;

	private final UserRepository userRepository;
	private final S3Service s3Service;
	
	public CourseServiceImpl(
	        CourseRepository courseRepository,
	        LessonRepository lessonRepository,
	        UserRepository userRepository,
	        S3Service s3Service) {

	    this.courseRepository = courseRepository;
	    this.lessonRepository = lessonRepository;
	    this.userRepository = userRepository;
	    this.s3Service = s3Service;
	}

	@Override
	public List<Course> getCoursesByInstructor(Long instructorId) {
		// TODO Auto-generated method stub
		return courseRepository.findByInstructorId(instructorId);
	}
	
	@Override
	public Course getCourseById(Long courseId) {

	    return courseRepository.findById(courseId)
	            .orElseThrow(() ->
	                    new RuntimeException("Course not found with id " + courseId));
	}

	@Override
	public Course updateCourse(Long courseId, Course course) {
		// TODO Auto-generated method stub
		Course existingCourse = courseRepository.findById(courseId)
				.orElseThrow(() -> new RuntimeException("course not found with id "+ courseId));
		
		existingCourse.setTitle(course.getTitle());
		existingCourse.setDescription(course.getDescription());;
		existingCourse.setPrice(course.getPrice());
		
		return courseRepository.save(existingCourse);
	}

	@Override
	public String deleteCourse(Long courseId) {
		// TODO Auto-generated method stub
		if(!courseRepository.existsById(courseId)) {
			return "Course not found with id " + courseId;
		}
		
		lessonRepository.deleteAll(lessonRepository.findByCourse_Id(courseId));
		courseRepository.deleteById(courseId);
		return "Course deleted with id" + courseId;
		
	}

	@Override
public CourseResponse createCourse(
        CourseRequest courseRequest,
        List<MultipartFile> videos,
        Authentication authentication) {

    if (courseRequest.getLessons() == null ||
            courseRequest.getLessons().size() != videos.size()) {

        throw new RuntimeException("Each lesson must have exactly one video.");
    }

    User instructor = userRepository.findById(1L)
            .orElseThrow(() -> new RuntimeException("Instructor not found"));

    Course course = new Course();
    course.setTitle(courseRequest.getTitle());
    course.setDescription(courseRequest.getDescription());
    course.setPrice(courseRequest.getPrice());
    course.setInstructor(instructor);

    course = courseRepository.save(course);

    List<LessonRequest> lessonRequests = courseRequest.getLessons();

    for (int i = 0; i < lessonRequests.size(); i++) {

        LessonRequest lessonRequest = lessonRequests.get(i);

        MultipartFile video = videos.get(i);

        String s3Key = s3Service.uploadFile(video);

        Lesson lesson = new Lesson();
        lesson.setCourse(course);
        lesson.setTitle(lessonRequest.getTitle());
        lesson.setDescription(lessonRequest.getDescription());
        lesson.setS3Key(s3Key);

        lessonRepository.save(lesson);
    }

    return new CourseResponse(
            course.getId(),
            course.getTitle(),
            "Course created successfully",
            lessonRequests.size());
}
	
	public List<CourseSummaryResponse> getAllCourses() {

	    List<Course> courses = courseRepository.findAll();

	    return courses.stream()
	            .map(course -> new CourseSummaryResponse(
	                    course.getId(),
	                    course.getTitle(),
	                    course.getDescription(),
	                    course.getPrice(),
	                    course.getInstructor() != null
	                    ? course.getInstructor().getName()
	                    : null))
	            .collect(Collectors.toList());
	}
	
	public CoursePlayerResponse getCoursePlayer(Long courseId) {

	    Course course = courseRepository.findById(courseId)
	            .orElseThrow(() -> new RuntimeException("Course not found"));

	    List<Lesson> lessons = lessonRepository.findByCourse_Id(courseId);

	    List<LessonResponse> lessonResponses = lessons.stream()
	            .map(lesson -> new LessonResponse(
	                    lesson.getId(),
	                    lesson.getTitle(),
	                    lesson.getDescription(),
	                    lesson.getS3Key()))
	            .collect(Collectors.toList());

	    return new CoursePlayerResponse(
	            course.getId(),
	            course.getTitle(),
	            course.getDescription(),
	            lessonResponses);
	}
}
