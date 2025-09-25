package com.render.projectfinder.Service;

import com.render.projectfinder.Entity.Project;

import com.render.projectfinder.Repository.ProjectRepository;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getProjectsFromTags(List<String> taglist) {
        return projectRepository.findProjectsByAllTags(taglist);
    }
}
