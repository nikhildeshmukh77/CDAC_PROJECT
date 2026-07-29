package com.knowledgegarden.serviceImpl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.knowledgegarden.entity.Course;
import com.knowledgegarden.repository.CourseRepository;
import com.knowledgegarden.repository.LessonRepository;
import com.knowledgegarden.service.CourseService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

	
	private final CourseRepository courseRepository;
	private final LessonRepository lessonRepository;
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
		
		lessonRepository.deleteAll(lessonRepository.findByCourseId(courseId));
		courseRepository.deleteById(courseId);
		return "Course deleted with id" + courseId;
		
	}

}
