package com.knowledgegarden.service;

import java.util.List;

import org.springframework.security.core.Authentication;
import org.springframework.web.multipart.MultipartFile;

import com.knowledgegarden.dto.CourseRequest;
import com.knowledgegarden.dto.CourseResponse;
import com.knowledgegarden.entity.Course;

public interface CourseService {

    List<Course> getCoursesByInstructor(Long instructorId);

    Course getCourseById(Long courseId);

    Course updateCourse(Long courseId, Course course);

    String deleteCourse(Long courseId);

    CourseResponse createCourse(
            CourseRequest courseRequest,
            List<MultipartFile> videos,
            Authentication authentication);
}