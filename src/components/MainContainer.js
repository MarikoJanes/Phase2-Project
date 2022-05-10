import React, { useState, useEffect } from 'react'
import Header from './Header';
import Search from './Search';
import Slideshow from './Slideshow';
import Footer from './Footer';
import ShowSearchedRecipe from './ShowSearchedRecipe';
import SingleRecipe from './SingleRecipe';

function MainContainer() {
  const [recipeData, setRecipeData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
    .then(res => res.json())
    .then(data => {
      setRecipeData(data)
    });
  }, []);

  

  const searchedRecipe = recipeData.filter(recipe => recipe.name.toLowerCase().includes(searchInput.toLocaleLowerCase()));

console.log(recipeData)
  return (
    <div style={{textAlign: "center"}}>
      <h1>Break an Egg!</h1>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      <SingleRecipe recipeData={recipeData}/>
      {searchInput === "" ? null : <ShowSearchedRecipe searchedRecipe={searchedRecipe} />}
      <Slideshow recipeData={recipeData}/>
      <Footer />
    </div>
  )

}



export default MainContainer