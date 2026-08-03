package com.knowledgegarden.dto;

public class CoursesResponse {

    
    private Long id;

    private String title;

    private String description;

    private Double price;
    
    private String instructorName;
        
    public CoursesResponse() {
    }

	public CoursesResponse(Long id, String title, String description, Double price, String instructorName) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.instructorName = instructorName;
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

}