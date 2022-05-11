import React from 'react';
import { useParams } from "react-router-dom";

function SingleRecipe({recipeData}) {
  console.log(recipeData)
  const { id } = useParams();
  console.log(id);
  const selectedRecipe = recipeData.filter(recipe => recipe.id === JSON.parse(id))
  
     
  
  
  console.log(selectedRecipe)
// if(recipeData==undefined || recipeData==null || recipeData.length == 0){
// let tmp = [{"image" : "https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif",
// "name":"Place holder"}];
// recipeData = tmp;
// }
    
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
    <h4> {selectedRecipe[0].ingredients.map((ingredient,idx) =>
      <li key= {idx}>{ingredient}</li>
      )}
    <h4>Instructions:</h4> 
    </h4>
      {
      Object.entries(selectedRecipe[0].description).map(([key, val]) => 
            <h4 key={key}>{key}:{val}</h4>  
        )
      }
      </div>
  </div> 

)
}

export default SingleRecipe