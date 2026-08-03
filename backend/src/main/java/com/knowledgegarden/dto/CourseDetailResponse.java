package com.knowledgegarden.dto;

import java.util.List;

public class CourseDetailResponse {

    private Long id;
    private String title;
    private String description;
    private Double price;
    private String instructorName;
    private List<LessonResponse> lessons;


    public CourseDetailResponse() {
    }


    public CourseDetailResponse(Long id, String title, String description,
                                Double price, String instructorName,
                                List<LessonResponse> lessons) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.instructorName = instructorName;
        this.lessons = lessons;
    }


    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public Double getPrice() {
        return price;
    }

    public String getInstructorName() {
        return instructorName;
    }

    public List<LessonResponse> getLessons() {
        return lessons;
    }
}