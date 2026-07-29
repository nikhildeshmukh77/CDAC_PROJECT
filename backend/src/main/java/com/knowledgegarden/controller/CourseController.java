package com.knowledgegarden.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.knowledgegarden.entity.Course;
import com.knowledgegarden.service.CourseService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/courses")
@Transactional
@RequiredArgsConstructor
public class CourseController {

	private final CourseService courseService;
	
	@GetMapping("/instructor/{instructorId}")
	public List<Course> getCoursesByInstructor(@PathVariable Long instructorId){
		return courseService.getCoursesByInstructor(instructorId);
		
	}
	
	@GetMapping("/{courseId}")
	public Course getCourseById(@PathVariable Long courseId) {
	    return courseService.getCourseById(courseId);
	}
	
	@PutMapping("/{courseId}")
	public Course updateCourse(@PathVariable Long courseId, @RequestBody Course course) {
		return courseService.updateCourse(courseId, course);
	}
	
	@DeleteMapping("/{courseId}")
	public String deleteCourse(@PathVariable Long courseId) {
		return courseService.deleteCourse(courseId);
	}
}
