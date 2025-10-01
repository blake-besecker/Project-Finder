package com.render.projectfinder.Entity;

import java.util.List;

public class ProjectDTO {
    private Long id;
    private String title;
    private String link;
    private List<String> tags;

    public ProjectDTO(Long id, String title, String link, List<String> tags) {
        this.id = id;
        this.title = title;
        this.link = link;
        this.tags = tags;
    }

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getLink() { return link; }
    public List<String> getTags() { return tags; }
}