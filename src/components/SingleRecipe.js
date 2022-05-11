import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function SingleRecipe() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [singleRecipe, setSingleRecipe] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:4000/recipes/${id}`)
    .then(res => res.json())
    .then(data => {
      setSingleRecipe(data);
      setIsLoaded(true);
    })
  }, [id]);


  // const selectedRecipe = recipeData.filter(recipe => recipe.id === JSON.parse(id))
   
  // console.log(selectedRecipe)

  if (!isLoaded) return <h2>Loading...</h2>;
  
return (
  <div key={singleRecipe.id} className="row">
    <div className="column" >
    <div className="paddingClass">
    <img src={singleRecipe.image} alt={singleRecipe.name} height="400"  width= "400"/>
      </div>
      </div>
    <div className="column">
    
    <h3 className = "recipeName"> {singleRecipe.name}</h3>
    <h3>Ingredients:</h3>
    <ul> {singleRecipe.ingredients.map((ingredient,idx) =>
      <li key={idx}>{ingredient}</li>
      )}
    </ul>
    <h3>Instructions:</h3> 
      {/* {
      Object.entries(selectedRecipe[0].instructions).map(([key, val]) => 
            <h4 key={key}>{key}:{val}</h4>  
        )
      } */}
      {singleRecipe.instructions.map((recipe, i) => {
        return (
          <div>
          <h4 key={i}>{Object.keys(recipe)}: {Object.values(recipe)}</h4>
          </div>
          )
      })}
      </div>
  </div> 

)
}

export default SingleRecipe