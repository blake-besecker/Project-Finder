package com.render.projectfinder.Entity;
import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "tags")
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @JsonIgnore
    @ManyToMany(mappedBy = "tags" )
    private List<Project> projects = new ArrayList<>();

    public Long getId() { return id; }
    public String getName() { return name; }
}
