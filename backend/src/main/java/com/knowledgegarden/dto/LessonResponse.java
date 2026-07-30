package com.knowledgegarden.dto;

public class LessonResponse {

    private Long id;
    private String title;
    private String description;
    private String s3Key;


    public LessonResponse(Long id, String title,
                          String description, String s3Key) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.s3Key = s3Key;
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

    public String getS3Key() {
        return s3Key;
    }
}