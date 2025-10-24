package com.render.projectfinder.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.render.projectfinder.Entity.Project;
import com.render.projectfinder.Entity.Tag;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    // Main query for project with given tags
    @Query(
        value = """
        WITH tid AS (
          SELECT id FROM tags WHERE lower(name) = ANY(cast(:taglist as text[]))
        ),
        pid AS (
          SELECT project_id
          FROM project_tags
          WHERE tag_id IN (SELECT id FROM tid)
          GROUP BY project_id
          HAVING COUNT(DISTINCT tag_id) = (SELECT COUNT(*) FROM tid)
        )
        SELECT * 
        FROM projects 
        WHERE id IN (SELECT project_id FROM pid)
        """,
        nativeQuery = true
    )
    List<Project> findProjectsByAllTags(@Param("taglist") String[] taglist);

    // TODO: add a 'query for all tags in the database' function
    @Query(
        value = """
        select * from tags
        """,
        nativeQuery = true
    )
    List<Tag> getAllTags();
}

