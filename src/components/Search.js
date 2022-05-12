import React from 'react'

const inputStyles = {
  padding: "10px",
  border: "3px solid #f8c146",
  boxShadow: "0px 0px 0px",
  borderColor: "#f8c146",
  outline: "10px",
  borderRadius: "25px",
  width: "35%"
};

function Search({searchInput, setSearchInput}) {
    
    function handleChange(e) {
        setSearchInput(e.target.value);
    }


  return (
    <div className= "searchButton">
        
        <input style={inputStyles} onChange={handleChange} type="text" placeholder=" 🍳  Search a recipe ..." name="search" value={searchInput} />
    </div>

  )
}

export default Search