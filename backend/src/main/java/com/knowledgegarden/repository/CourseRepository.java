package com.knowledgegarden.repository;

import com.knowledgegarden.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {
}