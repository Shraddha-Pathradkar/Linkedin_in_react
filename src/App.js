import React from "react";
import "./App.css";
import Sidebar from "./Components/Body/Sidebar/Sidebar";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
      {/* header
            sidebar
            mainapp page
            right widges */}
    </div>
  );
}

export default App;
