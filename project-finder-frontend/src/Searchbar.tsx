
import { useState, useEffect } from "react"
import type { Dispatch, SetStateAction } from "react";
const URL = ''

type searchFunctions = {
    setResults: Dispatch<SetStateAction<string>>
}


function Searchbar({setResults} : searchFunctions){
    const [input, setInput] = useState("");
    
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        const timeout = setTimeout(() => {
        let parts = input.trim().split(" ").filter(tag => tag.length > 0);
        if (!input.endsWith(" ")) {
            parts = parts.slice(0, -1); 
        }
        setTags(parts);
        }, 300);
        return () => clearTimeout(timeout);
    }, [input]);


    useEffect(() => {
        const fetchProjects = async () => {
            const result = await fetch(URL, {
                method: "GET",
                body: JSON.stringify({tags})
            })
            result.json().then((json) => {
                setResults(json)
            })
        }
        fetchProjects();
    }, [tags]);

    return(<div className="searchInterface">
            <h1 className="searchTitle">Project Hunter</h1>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} className="searchInput"/>
        </div>
    );
}

export default Searchbar