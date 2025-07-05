import React from 'react'
// import { Link } from 'react-router'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand" >Navbar</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Recipe List</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="add-recipe">Add Recipe</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" to="recipe-counter">Recipe Counter</Link>
        </li>
         <li className="nav-item dropdown">
          <Link className="nav-link" to="settings">Settings</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header