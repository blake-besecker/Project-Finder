
import { useState, useEffect } from "react"
import Searchbar from "./Searchbar";
import SearchResults from "./SearchResults"; 
import type { Dispatch ,SetStateAction} from "react";
type ProjectType = {
  id: number;
  title: string;
  link: string;
  tags: string[];
};
type searchFunctions = {
    input: string;
    setInput: Dispatch<SetStateAction<string>>;
}
function Header({input , setInput}: searchFunctions){

    const [tab, setTab] = useState("search");

    const [results, setResults] = useState<ProjectType[]>([]);

    const [page, setPage] = useState(0);

    const [totalPages, setTotalPages] = useState((results.length / 5) | 0);


    useEffect(()=> {
        setTotalPages((results.length / 5) | 0)
    },[results])

    if (tab == "search") {
        //show search tab
        return (
            <div>
        <div className="Header">
        <img className = "logo" src='logo.png' ></img>
        <button className="aboutTabButton" onClick={() => {setTab("about");}}>About</button>
        <button className="searchTabButton" onClick={() => {setTab("search");}}>Search</button>
        
        </div>
        <div className="tabContent">
        
        <Searchbar input={input} setInput={setInput} setResults={setResults}></Searchbar>

        <SearchResults projects={results} page={page} setPage={setPage}/>
        <button className="pageButtonBack" onClick={()=>{if (page>=1) setPage(page-1);}}>back</button>
        <button className="pageButtonForward" onClick={()=>{if (page<totalPages) setPage(page+1)}}>forward</button>
        <p className="pageCounter">{page+1}/{totalPages+1}</p>
        </div>
        </div>);
    }

    if (tab == "about") {
        //show about tab
        return (
            <div>
        <div className="Header">
        <img className = "logo" src='/public/logo.png'></img>
        <button className="aboutTabButton" onClick={() => {setTab("about");}}>About</button>
        <button className="searchTabButton" onClick={() => {setTab("search");}}>Search</button>
        
        </div>
        <div className="tabContent">
            <p className="aboutText">Thank you for using Project Hunter!</p>
          <p className="aboutText">Search for projects by typing tags into the searchbar on the 'search' tab</p>
          <p className="aboutText">Tags available for search are on the sidebar on the left, spaces between tags and underscores for spaces between the actual words</p>
        </div>
        
        
        </div>);
    } 
}
export default Header;
