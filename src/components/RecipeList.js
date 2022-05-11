import React from 'react';
import { Link, Route } from "react-router-dom";
import SingleRecipe from './SingleRecipe';

function RecipeList({recipeData}) {
 

    const lists = recipeData.map(egg => {
        return (
          <li key={egg.id} className="card">
          <Link to={`/recipes/${egg.id}`}>
            {egg.name}
            <img style={{height: "236.29px"}} src={egg.image} alt={egg.name} />
          </Link> 
          </li>
        )
        
      })

  return (
    <div className="grow">
      <div className='cards'>
        {lists}
        {/* <Route path={`${match.url}/recipes/${id}`}>
            <SingleRecipe />
      </Route> */}
      </div>
    </div>
  )
}

export default RecipeList