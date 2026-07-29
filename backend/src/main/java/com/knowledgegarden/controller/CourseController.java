package com.knowledgegarden.controller;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.knowledgegarden.dto.CourseRequest;
import com.knowledgegarden.dto.CourseResponse;
import com.knowledgegarden.entity.Course;
import com.knowledgegarden.service.CourseService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
@Transactional
public class CourseController {

    private final CourseService courseService;
    
    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping("/courses/instructor/{instructorId}")
    public List<Course> getCoursesByInstructor(@PathVariable Long instructorId) {
        return courseService.getCoursesByInstructor(instructorId);
    }

    @GetMapping("/courses/{courseId}")
    public Course getCourseById(@PathVariable Long courseId) {
        return courseService.getCourseById(courseId);
    }

    @PutMapping("/courses/{courseId}")
    public Course updateCourse(@PathVariable Long courseId,
                               @RequestBody Course course) {
        return courseService.updateCourse(courseId, course);
    }

    @DeleteMapping("/courses/{courseId}")
    public String deleteCourse(@PathVariable Long courseId) {
        return courseService.deleteCourse(courseId);
    }

    @PostMapping(value = "/instructor/courses",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<CourseResponse> createCourse(
            @RequestPart("course") CourseRequest courseRequest,
            @RequestPart("videos") List<MultipartFile> videos,
            Authentication authentication) {

        CourseResponse response =
                courseService.createCourse(courseRequest, videos, authentication);

        return ResponseEntity.ok(response);
    }
}