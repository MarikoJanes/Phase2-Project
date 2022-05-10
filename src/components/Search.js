import React from 'react'

function Search({searchInput, setSearchInput}) {
    
    function handleChange(e) {
        setSearchInput(e.target.value);
    }


  return (
    <div>
        
        <input onChange={handleChange} type="text" placeholder="Search recipe ..." name="search" value={searchInput} />
    </div>
  )
}

export default Search