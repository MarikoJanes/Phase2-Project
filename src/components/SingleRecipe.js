import React from 'react'

function SingleRecipe({recipeData}) {

    // need to get an id
let data =recipeData;
    
if(recipeData==undefined || recipeData==null || recipeData.length == 0){
let tmp = [{"image" : "https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif",
"name":"Place holder"}];
recipeData = tmp;
}
    
    // const ingredients

  return (
    <div>
  
                <img src={recipeData[0].image} alt={recipeData[0].name} />
      
                <h3>{recipeData[0].name}</h3>
                <h4></h4> 
          
    </div>
  )
}

export default SingleRecipe