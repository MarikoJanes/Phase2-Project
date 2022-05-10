import React from 'react'

function RecipeList({recipeData}) {


    let data =recipeData;
    
if(recipeData==undefined || recipeData==null || recipeData.length == 0){
let tmp = [{"image" : "https://c.tenor.com/FBeNVFjn-EkAAAAC/ben-redblock-loading.gif",
"name":"Place holder"}];
recipeData = tmp;
}
    const lists = recipeData.map(egg => {
        return (
          <li key={egg.id}>
          {egg.name}
          {/* <img style={{width: "300px"}} src={egg.image} alt={egg.name} /> */}
          </li>
        )
        
      })

  return (
    <div><h1>hello</h1>{lists}</div>
  )
}

export default RecipeList