import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import useDocumentTitle from '../hooks/useDocumentTitle';
import Footer from './Footer';

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

  const pageTitle = singleRecipe ? `Break an Egg! | ${singleRecipe.name}` : "Break an Egg!";
  useDocumentTitle(pageTitle);

  // const selectedRecipe = recipeData.filter(recipe => recipe.id === JSON.parse(id))
   
  // console.log(selectedRecipe)

  // const styles = {
  //   borderTop: '5px solid rgba(0, 0, 0, 0.05)', 
  // }

  if (!isLoaded) return <h2>Loading...</h2>;
  
return (

  <>
  <div key={singleRecipe.id} className="row recipeBox">
    <div  className="column left" >
      <div className="paddingClass">
        <div className = "imageDiv">
          <img 
          className = "singleRecipeImg"
          src={singleRecipe.image} 
          alt={singleRecipe.name} 
          height="400"  
          width= "400"/>
        </div>
        </div>
      </div>
    <div className="column right">
    
    <h3 className="recipeName"> {singleRecipe.name}</h3>

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
          <div key={i}>
          <h4>{Object.keys(recipe)}: </h4>
          <h4 className='steps'>{Object.values(recipe)}</h4>
          </div>
          )
      })}
      </div>
  </div> 
  <Footer />
  </>
)
}

export default SingleRecipe