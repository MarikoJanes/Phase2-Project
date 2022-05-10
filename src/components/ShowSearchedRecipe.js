import React from 'react'

function ShowSearchedRecipe({searchedRecipe}) {

    const data = searchedRecipe.map(recipe => {
        return (
            <div key={recipe.id}>
                <img src={recipe.image} alt={recipe.name} />
                <h3>{recipe.name}</h3>
            </div>
        )
    });

  return (
    <div>
        {data}
    </div>
  )
}

export default ShowSearchedRecipe