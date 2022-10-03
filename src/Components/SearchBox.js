import React from "react";

const SearchBox = ({searchMovie, searchChange}) => {
    return (
        <div className="">
            <input 
                className="search-box" 
                type="text" 
                placeholder="Search.." 
                value={searchMovie} 
                onChange={searchChange}>
            </input> 
        </div>      
    )  
};

export default SearchBox;
