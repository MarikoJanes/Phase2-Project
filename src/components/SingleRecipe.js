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
  <div key={selectedRecipe[0].id}>
    <img src={selectedRecipe[0].image} alt={selectedRecipe[0].name} />
    <h3>{selectedRecipe[0].name}</h3>
    {/* <h4>{recipe.ingredients}</h4> */}
  </div>
) 

 
}

export default SingleRecipe