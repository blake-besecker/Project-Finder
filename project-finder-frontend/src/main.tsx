import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import Header from "./Header.tsx"
import Sidebar from "./Sidebar.tsx"
function Main(){



  return(<div className="siteContainer">
     
    <Header></Header>
    <Sidebar></Sidebar>
    
   
  </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);