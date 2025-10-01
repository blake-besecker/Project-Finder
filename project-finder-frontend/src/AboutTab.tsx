
import type { Dispatch, SetStateAction } from "react";

type TabSelect = {
  shown: string;
  setTab: Dispatch<SetStateAction<string>>
};
function AboutTab({ shown, setTab }: TabSelect) {
    if (shown == "about") {
        //show full tab
        return (
        <div className="aboutTab">
        <button className="button" onClick={() => {setTab("about");}}>About</button>
        <p className="aboutText">this is some about text</p>
        </div>);
    } else {
        //just show button
        return (<div className="aboutTab">
        <button className="aboutTabButton" onClick={() => {setTab("about");}}>About</button>
        
        </div>);
    }
    
}
export default AboutTab;