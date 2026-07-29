package com.knowledgegarden.repository;

import com.knowledgegarden.entity.Course;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {

	List<Course> findByInstructorId(Long instructorId);

//	List<Course> findByInstructorId(Long instructorId);
}