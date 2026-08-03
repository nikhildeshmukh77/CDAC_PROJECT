package com.knowledgegarden.dto;

import java.util.List;

public class CourseRequest {

    private String title;
    private String description;
    private Double price;
    private List<LessonRequest> lessons;

    public CourseRequest() {
    }

    public CourseRequest(String title, String description, Double price, List<LessonRequest> lessons) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.lessons = lessons;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public List<LessonRequest> getLessons() {
        return lessons;
    }

    public void setLessons(List<LessonRequest> lessons) {
        this.lessons = lessons;
    }
}