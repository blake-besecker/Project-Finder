package com.render.projectfinder.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.render.projectfinder.Entity.Project;
import com.render.projectfinder.Entity.Tag;
import com.render.projectfinder.Repository.ProjectRepository;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    // public List<String> cleanTagList(List<String> taglist) {
    //     List<String> cleanedTagList = new ArrayList<>();
    //     List<String> allTags = projectRepository.getAllTags().stream().map(tag -> tag.toLowerCase()).collect(Collectors.toList());;
    //     for (int i = 0; i<taglist.size();i++) {
    //         if (allTags.contains(taglist.get(i).toLowerCase())) {
    //             cleanedTagList.add(taglist.get(i));
    //         }
    //     }
    //     return cleanedTagList;
    // }

    public List<Project> getProjectsFromTags(List<String> taglist) {
        //taglist = cleanTagList(taglist);
        String[] tags = taglist.toArray(new String[0]);
        return projectRepository.findProjectsByAllTags(tags);
    }

    public List<Tag> getAllTags() {
        return projectRepository.getAllTags();
    }
}
