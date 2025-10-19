
import { useState, useEffect } from "react"
import type { Dispatch, SetStateAction } from "react";
const URL = 'http://localhost:8080/projects'
type ProjectType = {
  id: number
  title: string;
  link: string;
  tags: string[];
};
type searchFunctions = {
    setResults: Dispatch<SetStateAction<ProjectType[]>>
}


function Searchbar({setResults} : searchFunctions){
    const [input, setInput] = useState("");
    
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
        let parts = input.trim().split(" ").filter(tag => tag.length > 0);
        setTags(parts);
        }, 300);
        return () => clearTimeout(timeout);
    }, [input]);


    useEffect(() => {
        const fetchProjects = async () => {
            const result = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify(tags)
            })
            result.json().then((json) => {
                setResults(json)
            })
        }
        fetchProjects();
    }, [tags]);

    return(<div>
            <h1 className="searchTitle">Project Hunter</h1>
            <p className="searchDescription">please separate tags by spaces and type an underscore for spaces within tags</p>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} className="searchInput"/>
        </div>
    );
}

export default Searchbar