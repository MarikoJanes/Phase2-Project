import React from 'react'

function ShowSearchedRecipe({searchedRecipe}) {

    const data = searchedRecipe.map(recipe => {
        return (
            <li key={recipe.id} className="card" >
                <img src={recipe.image} alt={recipe.name} style={{height: "236.29px"}} />
                <h3>{recipe.name}</h3>
            </li>
        )
    });

  return (
    <ul className='cards'>
        {data}
    </ul>
  )
}

export default ShowSearchedRecipe