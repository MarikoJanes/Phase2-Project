import React from 'react'
import { useHistory } from "react-router-dom";

function ShowSearchedRecipe({searchedRecipe}) {
    const history = useHistory();

    const data = searchedRecipe.map(recipe => {
        return (
            <li  key={recipe.id} className="searchCard">
                <img onClick={handleClick} id={recipe.id} src={recipe.image} alt={recipe.name} style={{height: "236.29px"}} />
                <h3>{recipe.name}</h3>
            </li>
        )
    });

    function handleClick(e) {
        console.log(e.target.id)
        history.push(`recipes/${e.target.id}`);
    }

  return (
    <ul className='cards searchCards'>
        {data}
    </ul>
  )
}

export default ShowSearchedRecipe