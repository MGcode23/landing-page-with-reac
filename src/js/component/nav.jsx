import React from "react"

function Nav (){
    return (
    <nav className="nav navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="navbar-nav ml-auto">
  <a className="nav-link active" aria-current="page" href="#">Home</a>
  <a className="nav-link" href="#">About</a>
  <a className="nav-link" href="#">Services</a>
  <a className="nav-link disabled">Contact</a>
  </div>
</nav>
    )
}
export default Nav;