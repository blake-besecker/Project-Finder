package com.render.projectfinder.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.render.projectfinder.Entity.Project;
import com.render.projectfinder.Entity.Tag;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    @Query("""
        SELECT p
        FROM Project p
        JOIN p.tags t
        WHERE LOWER(t.name) IN :taglist
        GROUP BY p
        HAVING COUNT(DISTINCT t.id) = :tagCount
        """)
    @EntityGraph(attributePaths = {"tags"})
    List<Project> findProjectsByAllTags(@Param("taglist") List<String> taglist, @Param("tagCount") long tagCount);

    @Query("SELECT t FROM Tag t")
    List<Tag> getAllTags();
}

