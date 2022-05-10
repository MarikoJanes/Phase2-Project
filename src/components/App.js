import React, {useState, useEffect} from 'react'
import MainContainer from './MainContainer'
import { Route, Switch } from "react-router-dom";
import RecipeList from './RecipeList';
import Header from './Header';
import PostRecipeForm from './PostRecipeForm';
import SingleRecipe from './SingleRecipe';

function App() {
  const [recipeData, setRecipeData] = useState([]);
  

  useEffect(() => {
    fetch("http://localhost:4000/recipes")
    .then(res => res.json())
    .then(data => {
      setRecipeData(data)
    });
  }, []);

  return (
    <div>
      <Header />
          <Switch>
            <Route exact path="/">
              <MainContainer recipeData={recipeData}/>
            </Route>
            <Route exact path="/recipes">
              <RecipeList recipeData={recipeData} />
            </Route>
            <Route exact path="/post">
              <PostRecipeForm />
            </Route>
            <Route path="/recipes/:id">
              <SingleRecipe recipeData={recipeData} />
            </Route>
          </Switch>
    </div>
  )
}

export default App
