import React, { useState, useEffect } from 'react'

function MainContainer() {
  const [recipeData, setRecipeData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/recipes")
    .then(res => res.json())
    .then(data => setRecipeData(data));
  }, []);

  const lists = recipeData.map(egg => {
    return (
      <li key={egg.id}>
      {egg.name}
      <img style={{width: "300px"}} src={egg.image} alt={egg.name} />
      </li>
    )
    
  })

  return (
    <div>{lists}</div>
  )
}

export default MainContainer