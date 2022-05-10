import React, { useState, useEffect } from 'react'

function RecipeList() {
    const [recipeData, setRecipeData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/recipes")
    .then(res => res.json())
    .then(data => {
      setRecipeData(data)
    });
    }, []);

    const lists = recipeData.map(egg => {
        return (
          <li key={egg.id} className="card">
          {egg.name}
          <img style={{height: "236.29px"}} src={egg.image} alt={egg.name} />
          </li>
        )
        
      })

  return (
    <div className='cards'>{lists}</div>
  )
}

export default RecipeList