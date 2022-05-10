import React from 'react'
import { NavLink } from 'react-router-dom';

// each link style needs to be changed
// NavLink 

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
  };

function Header() {
  return (
    <div> 
        <NavLink
            exact to="/"
            style={linkStyles}
        >
            HOME
        </NavLink>
        <NavLink
            exact to="/recipes"
            style={linkStyles}
        >
            View All Recipes
        </NavLink>
        <NavLink
            exact to="/post"
            style={linkStyles}
        >
            Add a recipe
        </NavLink>
    </div>
  )
}

export default Header