import SearchTab from "./SearchTab.tsx"
import AboutTab from "./AboutTab.tsx"
import { useState} from "react"
function Header(){

    const [tab, setTab] = useState("search");

    return(<div className="Header">
        <SearchTab shown={tab} setTab={setTab}/>
        <img className = "logo" src='./assets/logo.png'></img>
        <AboutTab shown={tab} setTab={setTab}/>
        </div>);
}
export default Header;