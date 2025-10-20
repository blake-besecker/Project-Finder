import { useEffect, useState } from "react";
type TagType = {
  id: number;
  name: string;
};
const URL = 'http://localhost:8080/tags'
function Sidebar() {

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

    return(
    <div className="Sidebar">
        <h2 className="sidebarTitle">
            Tags
        </h2>
    <ul>
        {taglist.map((tag) => (
            <div key={tag.id}>
            <p className="tagEntry">
                {tag.name}
            </p>
            </div>
        ))}
    </ul>
    </div>
    );
}
export default Sidebar;