type ProjectProps = {
  title: string;
  link: string;
  tags: string[];
};

function Project({ title, link, tags }: ProjectProps) {
    return(<div className="projectCard">
        <h2>{title}</h2> <a href={link}>{link}</a> {tags.join(", ")}
        </div>);
}
export default Project