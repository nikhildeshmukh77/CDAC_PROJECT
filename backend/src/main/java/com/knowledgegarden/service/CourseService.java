package com.knowledgegarden.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.knowledgegarden.dto.CourseDetailResponse;
import com.knowledgegarden.dto.CoursePlayerResponse;
import com.knowledgegarden.dto.CourseSummaryResponse;
import com.knowledgegarden.dto.LessonResponse;
import com.knowledgegarden.entity.Course;
import com.knowledgegarden.entity.Lesson;
import com.knowledgegarden.repository.CourseRepository;
import com.knowledgegarden.repository.LessonRepository;

@Service
@Transactional(readOnly = true)
public class CourseService {

    private final CourseRepository courseRepository;
    private final LessonRepository lessonRepository;

    public CourseService(CourseRepository courseRepository,
                         LessonRepository lessonRepository) {
        this.courseRepository = courseRepository;
        this.lessonRepository = lessonRepository;
    }

    public List<CourseSummaryResponse> getAllCourses() {
        List<Course> list = courseRepository.findAll();
        return list.stream()
                .map(c -> new CourseSummaryResponse(
                        c.getId(),
                        c.getTitle(),
                        c.getDescription(),
                        c.getPrice(),
                        c.getInstructor() != null ? c.getInstructor().getName() : null
                ))
                .collect(Collectors.toList());
    }

    public CoursePlayerResponse getCoursePlayer(Long courseId) {
        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException("Course not found"));

        List<Lesson> lessons = lessonRepository.findByCourseId(courseId);

        List<LessonResponse> lessonResponses = lessons.stream()
                .map(lesson -> new LessonResponse(
                        lesson.getId(),
                        lesson.getTitle(),
                        lesson.getDescription(),
                        lesson.getS3Key()
                ))
                .collect(Collectors.toList());

        return new CoursePlayerResponse(
                course.getId(),
                course.getTitle(),
                course.getDescription(),
                lessonResponses
        );
    }
}