package com.knowledgegarden.dto;

import java.util.List;

public class CoursePlayerResponse {

    private Long id;
    private String title;
    private String description;
    private List<LessonResponse> lessons;

    public CoursePlayerResponse() {
    }

    public CoursePlayerResponse(Long id, String title,
                                String description,
                                List<LessonResponse> lessons) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.lessons = lessons;
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

	public List<LessonResponse> getLessons() {
		return lessons;
	}

	public void setLessons(List<LessonResponse> lessons) {
		this.lessons = lessons;
	}

    
}