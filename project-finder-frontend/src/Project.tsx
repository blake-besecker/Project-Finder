type ProjectProps = {
  title: string;
  link: string;
  tags: string[];
};

function Project({ title, link, tags }: ProjectProps) {
    return(<div className="projectCard">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <input className="projectCardButton" type="button" />
          </a>
        <h2 className="projectCardText">{title}</h2> 
        <p className="projectCardText">{tags.join(", ")}</p>
        </div>);
}
export default Project
