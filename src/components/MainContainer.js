import React, { useState } from 'react'
import Search from './Search';
import Slideshow from './Slideshow';
import ShowSearchedRecipe from './ShowSearchedRecipe';
import Footer from './Footer';
import useDocumentTitle from '../hooks/useDocumentTitle';


function MainContainer({recipeData}) {
  const [searchInput, setSearchInput] = useState("");

  const searchedRecipe = recipeData.filter(recipe => recipe.name.toLowerCase().includes(searchInput.toLocaleLowerCase()));

  useDocumentTitle("Break an Egg! | Home");
  
console.log(recipeData)
  return (
    <div style={{textAlign: "center"}}>
      <div style={{ 
      backgroundImage: `url("https://cdn.dribbble.com/users/774095/screenshots/6615293/egg_short_dribbble_v01.gif")`,
      textAlign: "center",
      // backgroundSize: "contain",
      backgroundRepeat: "round",
      }}>
      <h1 className = "tagName" >Break an Egg! </h1>
      </div>
      <Search searchInput={searchInput} setSearchInput={setSearchInput} />
      {searchInput === "" ? null : <ShowSearchedRecipe searchedRecipe={searchedRecipe} />}
      <Slideshow recipeData={recipeData}/>
      <Footer />
    </div>
  )

}



export default MainContainer