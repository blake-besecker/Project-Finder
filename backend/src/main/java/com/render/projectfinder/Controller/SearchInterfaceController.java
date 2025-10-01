package com.render.projectfinder.Controller;

import com.render.projectfinder.Entity.Project;
import com.render.projectfinder.Entity.ProjectDTO;
import com.render.projectfinder.Entity.Tag;
import com.render.projectfinder.Service.ProjectService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.springframework.http.ResponseEntity;

@RestController
public class SearchInterfaceController {

    private final ProjectService projectService;

    public SearchInterfaceController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @PostMapping("/projects")
    public ResponseEntity<List<ProjectDTO>> getProjectsFromTags(@RequestBody List<String> taglist) {
        List<Project> projects = projectService.getProjectsFromTags(taglist);
        List<ProjectDTO> dtos = projects.stream()
        .map(p -> new ProjectDTO(
            p.getId(),
            p.getTitle(),
            p.getLink(),
            p.getTags().stream().map(Tag::getName).toList()
        ))
        .toList();
        return ResponseEntity.ok(dtos);
    }

}