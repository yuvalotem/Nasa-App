import React from 'react';

function SearchBar(props) {
  return (
    <div className="SearchBar">
      <input placeholder='Search Something' value={props.value} onChange={props.handleChange}/>
      
    </div>
  );
}

export default SearchBar;