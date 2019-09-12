import React from "react";
import "./App.css";
import PhotoList from "./PhotoList";
import PhotoCard from "./PhotoCard";
import Header from "./Header";


function App() {
  return (
    <div className="App">
      <Header />
      <PhotoList />
    </div>
  );
}

export default App;
