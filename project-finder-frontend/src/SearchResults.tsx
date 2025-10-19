import Project from "./Project";
import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
type ProjectType = {
  id: number;
  title: string;
  link: string;
  tags: string[];
};

type SearchResultsProps = {
  projects: ProjectType[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>
};

function SearchResults({ projects, page, setPage }: SearchResultsProps) {

  const [pages, setPages] = useState<ProjectType[][]>([]);

  //display only up to 5 results, going past that if a button is clicked
    function chunkArray<T>(arr: T[]): T[][] {
      const chunks: T[][] = [];
      for (let i = 0; i < arr.length; i += 5) {
        chunks.push(arr.slice(i, i + 5));
      }
      return chunks;
  }
  useEffect(() => {
    setPages(chunkArray(projects));
    setPage(0);
  }, [projects])

  
  
  return (
    <div className="tabContent">
      <ul>
        {pages[page]?.map((project) => (
          <div key={project.id}>
            <Project
              title={project.title}
              link={project.link}
              tags={project.tags}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
