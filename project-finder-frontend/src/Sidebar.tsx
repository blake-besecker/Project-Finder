import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
type TagType = {
  id: number;
  name: string;
};
type searchFunctions = {
    setInput: Dispatch<SetStateAction<string>>;
}
const URL = 'https://projecthunter-production-7f33.up.railway.app/tags'
function Sidebar({setInput}: searchFunctions) {

    const [taglist, setTaglist] = useState<TagType[]>([]);

    const fetchTags = async () => {
            const result = await fetch(URL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json" 
                },
            })
            result.json().then((json) => {
                //sort tags alphabetically
                json.sort((a: TagType, b: TagType) => {
                    if (a.name < b.name) return -1;
                    else if (a.name > b.name) return 1;
                    else return 0;
                })
                setTaglist(json)
            })
        }

    useEffect(() => {
        fetchTags();
    },[])

    //TODO: add function
    const searchTag = () => {
        setInput("hi");
    };


    return(
    <div className="Sidebar">
        <h2 className="sidebarTitle">
            Tags
        </h2>
    <ul>
        {taglist.map((tag) => (
            <div key={tag.id}>
            <p onClick={searchTag} className="tagEntry">
                {tag.name}
            </p>
            </div>
        ))}
    </ul>
    </div>
    );
}
export default Sidebar;
