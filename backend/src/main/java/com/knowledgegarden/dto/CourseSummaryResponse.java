package com.knowledgegarden.dto;

public class CourseSummaryResponse {

    private Long id;
    private String title;
    private String description;
    private Double price;
    private String instructorName;

    public CourseSummaryResponse() {
    }

    public CourseSummaryResponse(Long id, String title, String description, Double price, String instructorName) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.instructorName = instructorName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getInstructorName() {
        return instructorName;
    }

    public void setInstructorName(String instructorName) {
        this.instructorName = instructorName;
    }
}