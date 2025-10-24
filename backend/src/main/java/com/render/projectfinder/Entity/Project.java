package com.render.projectfinder.Entity;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.*;

@Entity
@Table(name = "projects")
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String title;

    @Column(nullable = false, unique = true)
    private String link;

    @ManyToMany
    @JoinTable(
        name = "project_tags",
        joinColumns = @JoinColumn(name = "project_id"),
        inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private List<Tag> tags = new ArrayList<>();

    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getLink() { return link; }
    public List<Tag> getTags() { return tags; }

}
