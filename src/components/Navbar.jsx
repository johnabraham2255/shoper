import React from "react"
import { Link } from 'react-router-dom' 

function Navbar ({setSearch}){

    return(
        <>
             <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid ">
  <Link to={`/`}>
    <a className="navbar-brand text-light">Navbar</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={`/`}>
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
          </Link>
        </li>
        <li className="nav-item">
          
          <a className="nav-link text-light" href="#">Link</a>
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu bg-primary">
            <li><a className="dropdown-item text-light" href="#">Action</a></li>
            <li><a className="dropdown-item text-light" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item text-light" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled text-light">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" onInput={(e)=>{setSearch(e.target.value)}} placeholder="Search" aria-label="Search"/>
        </form>
    </div>
  </div>
</nav>
               
        


        </>
    )
}

export default Navbar