import React, { useState } from 'react'
import Search from './Search';
import Slideshow from './Slideshow';
import Footer from './Footer';
import ShowSearchedRecipe from './ShowSearchedRecipe';


function MainContainer({recipeData}) {
  const [searchInput, setSearchInput] = useState("");

  const searchedRecipe = recipeData.filter(recipe => recipe.name.toLowerCase().includes(searchInput.toLocaleLowerCase()));

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