
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react"
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults"; 
type TabSelect = {
  shown: string;
  setTab: Dispatch<SetStateAction<string>>
};
type ProjectType = {
  title: string;
  link: string;
  tags: string[];
};
function SearchTab({ shown, setTab }: TabSelect) {

    const [results, setResults] = useState<ProjectType[]>([]);

    if (shown == "search") {
        //show full tab
        return (
        <div className="searchTab">
        <button className="button" onClick={() => {setTab("search");}}>Search</button>

        <Searchbar setResults={() => {setResults}}></Searchbar>

        <SearchResults projects={results}/>

        </div>);
    } else {
        //just show head
        return (
        <div className="searchTab">
        <button className="Button" onClick={() => {setTab("search");}}>Search</button>
        </div>);
    }

}
export default SearchTab;