package com.render.projectfinder.Controller;

import com.render.projectfinder.Entity.Project;
//TODO: may need to import Tag type if we want to return tags for a name
import com.render.projectfinder.Service.ProjectService;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

import org.springframework.http.ResponseEntity;

@RestController
@RequestMapping("/rest")
public class SearchInterfaceController {

    private final ProjectService projectService;

    public SearchInterfaceController(ProjectService projectService) {
        this.projectService = projectService;
    }

    @GetMapping("/projects}")
    public ResponseEntity<List<Project>> getProjectsFromTags(@RequestBody List<String> taglist) {
        return ResponseEntity.ok(projectService.getProjectsFromTags(taglist));
    }
}
