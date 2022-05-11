import React from 'react'
import { NavLink } from 'react-router-dom';

// each link style needs to be changed
// NavLink 

const linkStyles = {
    display: "inline-block",
    // width: "50px",
    padding: "12px",
    paddingLeft: "50px",
    paddingRight: "50px",
    margin: "0 6px 6px",
    background: "#FFB72B",
    textDecoration: "none",
    color: "#000000",
    fontFamily: "Soleil, Helvetica, Arial, sans-serif",
    fontWeight: "100",
    letterSpacing: "6px",
    textTransform: "uppercase",
    overflow: "hidden",
    whiteSpace: "nowrap",
    
    
  };

function Header() {
  return (
    <div className = "paddingHeader"> 
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