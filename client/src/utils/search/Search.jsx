import React from "react";

const Search = () => {
    const searchRooms = () => {
        console.log("first");
        
    }
  return <div>
    <section id="search_section">
    <div className="search_container">
        <div className="sBar">
            <input type="text" className="searchInput" placeholder="Search City" onKeyUp={searchRooms}/>
            <button onClick={searchRooms} className="searchButton">Search</button>
        </div>
    </div>
</section>
  </div>;
};

export default Search;
