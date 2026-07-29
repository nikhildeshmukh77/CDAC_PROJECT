package com.knowledgegarden.dto;

public class CourseResponse {

    private Long id;
    private String title;
    private String message;
    private int lessonCount;

    public CourseResponse(Long id, String title, String message, int lessonCount) {
        this.id = id;
        this.title = title;
        this.message = message;
        this.lessonCount = lessonCount;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getMessage() {
        return message;
    }

    public int getLessonCount() {
        return lessonCount;
    }
}