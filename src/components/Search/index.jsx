import React from "react";
import Genre from "./Genre";
import Rating from "./Rating";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 gap-5 justify-around items-start w-full grid-flow-row px-4 md:px-2">
      <SearchBar />
      <div className="grid grid-cols-2 gap-5 col-span-4 md:col-span-2 items-start">
        <Rating />
        <Genre />
      </div>
    </div>
  );
};
export default Search;
