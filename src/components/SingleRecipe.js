import React from 'react';
import { useParams } from "react-router-dom";

function SingleRecipe({recipeData}) {
  const { id } = useParams();
  console.log(id);
  const selectedRecipe = recipeData.filter(recipe => recipe.id === JSON.parse(id))
   
  console.log(selectedRecipe)

    
return (
  <div key={selectedRecipe[0].id} className="row">
    <div className="column" >
    <div className="paddingClass">
    <img src={selectedRecipe[0].image} alt={selectedRecipe[0].name} height="400"  width= "400"/>
      </div>
      </div>
    <div className="column">
    
    <h3 className = "recipeName"> {selectedRecipe[0].name}</h3>
    <h3>Ingredients:</h3>
    <ul> {selectedRecipe[0].ingredients.map((ingredient,idx) =>
      <li key= {idx}>{ingredient}</li>
      )}
    </ul>
    <h3>Instructions:</h3> 
      {/* {
      Object.entries(selectedRecipe[0].instructions).map(([key, val]) => 
            <h4 key={key}>{key}:{val}</h4>  
        )
      } */}
      {selectedRecipe[0].instructions.map((recipe, i) => {
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