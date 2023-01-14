import React from "react";
import ReactDOM from "react-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="grid items-center my-8 lg:max-w-screen-lg md:max-w-screen-md max-w-screen-sm m-auto">
      <Search />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
