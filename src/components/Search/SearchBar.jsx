import React, { useState } from "react";
import Border from "../utilities/Border";

const SearchBar = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <Border className="col-span-4 md:col-span-3 text-gray-600">
      <input
        onChange={() => setSearchKeyword(event.target.value)}
        placeholder="Enter movie name"
        className="outline-none  px-4 py-3 w-full"
        value={searchKeyword}
      />
    </Border>
  );
};
export default SearchBar;
