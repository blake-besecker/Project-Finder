import Project from "./Project";

type ProjectType = {
  title: string;
  link: string;
  tags: string[];
};

type SearchResultsProps = {
  projects: ProjectType[];
};

function SearchResults({ projects }: SearchResultsProps) {
  return (
    <div className="searchResults">
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <Project
              title={project.title}
              link={project.link}
              tags={project.tags}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
