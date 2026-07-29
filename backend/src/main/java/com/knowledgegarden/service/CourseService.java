package com.knowledgegarden.service;

import java.util.List;

import com.knowledgegarden.entity.Course;

public interface CourseService {

	List<Course> getCoursesByInstructor(Long instructorId);

	Course updateCourse(Long courseId, Course course);

	String deleteCourse(Long courseId);

	Course getCourseById(Long courseId);

	

}
