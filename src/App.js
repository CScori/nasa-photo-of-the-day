import React from "react";
import "./App.css";
import PhotoList from "./PhotoList"
import PhotoCard from "./PhotoCard";


function App() {
  return (
    <div className="App">
      <PhotoList />
      <PhotoCard />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p>
    </div>
  );
}

export default App;
