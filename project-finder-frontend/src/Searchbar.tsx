
import { useState, useEffect } from "react"
import type { Dispatch, SetStateAction } from "react";
const URL = 'projecthunter-production.up.railway.app/projects'
type ProjectType = {
  id: number
  title: string;
  link: string;
  tags: string[];
};
type searchFunctions = {
    setResults: Dispatch<SetStateAction<ProjectType[]>>;
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
}


function Searchbar({setResults, input, setInput} : searchFunctions){
    
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
            <p className="searchDescription">please separate tags by spaces and type an underscore for spaces within tags</p>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} className="searchInput"/>
        </div>
    );
}

export default Searchbar
