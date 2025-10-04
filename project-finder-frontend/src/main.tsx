import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Header from "./Header.tsx"
function Main(){



  return(<div>
    <Header></Header>
  </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);