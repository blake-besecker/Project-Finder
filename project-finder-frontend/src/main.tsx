import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Header from "./Header.tsx"
import Sidebar from "./Sidebar.tsx"
import {useState} from "react";
function Main(){

  const [input, setInput] = useState("");

  return(<div className="siteContainer">
     <Sidebar  setInput={setInput}></Sidebar>
    <Header input={input} setInput={setInput}></Header>
    
    
   
  </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);