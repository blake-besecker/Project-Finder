type ProjectProps = {
  title: string;
  link: string;
  tags: string[];
};

function Project({ title, link, tags }: ProjectProps) {
    return(<div className="projectCard">
        <form action={link}>
          <input className="projectCardButton" type='submit' value=''></input>
        </form> 
        <h2 className="projectCardText">{title}</h2> 
        <p className="projectCardText">{tags.join(", ")}</p>
        </div>);
}
export default Project