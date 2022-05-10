import React from 'react'
import MainContainer from './MainContainer'
import { Route, Switch } from "react-router-dom";
import RecipeList from './RecipeList';
import Header from './Header';
import PostRecipeForm from './PostRecipeForm';

function App() {
  return (
    <div>
      <Header />
          <Switch>
            <Route exact path="/">
              <MainContainer />
            </Route>
            <Route exact path="/recipes">
              <RecipeList />
            </Route>
            <Route exact path="/post">
              <PostRecipeForm />
            </Route>
          </Switch>
    </div>
  )
}

export default App
