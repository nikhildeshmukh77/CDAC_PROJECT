package com.knowledgegarden.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.knowledgegarden.dto.CoursePlayerResponse;
import com.knowledgegarden.dto.CourseSummaryResponse;
import com.knowledgegarden.service.CourseService;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public ResponseEntity<List<CourseSummaryResponse>> getAllCourses() {
        List<CourseSummaryResponse> courses = courseService.getAllCourses();
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/{courseId}/player")
    public ResponseEntity<CoursePlayerResponse> getCoursePlayer(
            @PathVariable Long courseId) {

        CoursePlayerResponse response = courseService.getCoursePlayer(courseId);
        return ResponseEntity.ok(response);
    }
}