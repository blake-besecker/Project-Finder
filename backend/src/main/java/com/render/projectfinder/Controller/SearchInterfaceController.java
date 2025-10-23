package com.render.projectfinder.Controller;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.render.projectfinder.Entity.Project;
import com.render.projectfinder.Entity.ProjectDTO;
import com.render.projectfinder.Entity.Tag;
import com.render.projectfinder.Entity.TagDTO;
import com.render.projectfinder.Service.ProjectService;

@CrossOrigin(origins = "https://projecthunter.vercel.app/", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
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

    @GetMapping("/tags")
    public ResponseEntity<List<TagDTO>> getAllTags() {

        List<Tag> tags = projectService.getAllTags();
        List<TagDTO> dtos = tags.stream()
        .map(t -> new TagDTO(
            t.getId(),
            t.getName()
        ))
        .toList();
        return ResponseEntity.ok(dtos);
    }

}
