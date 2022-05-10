import React from 'react'
import MainContainer from './MainContainer'
import { Route, Switch } from "react-router-dom";
import RecipeList from './RecipeList';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
          <Switch>
            <Route exact path="/">
              <MainContainer />
            </Route>
            <Route exact path="/allrecipes">
              <RecipeList />
            </Route>
          </Switch>
    </div>
  )
}

export default App
