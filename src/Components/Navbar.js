import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
   
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} ` }>
  <div className="container-fluid">
    <a className="navbar-brand" href="">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.abouttext}</a>
        </li> */}
      </ul>
    </div>
       
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" onClick={props.light} name="btnradio"  id="btnradio1" autoComplete="off"  />
  <label className={`btn  btn-outline-${props.mode === "light"?"dark":"light"}`} htmlFor="btnradio1">Light</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
  <label className={`btn  btn-outline-${props.mode === "light"?"dark":"light"}`} onClick={props.blue} htmlFor="btnradio2">Blue</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
  <label className={`btn  btn-outline-${props.mode === "light"?"dark":"light"}`} onClick={props.green} htmlFor="btnradio3">Green</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio4" autoComplete="off"/>
  <label className={`btn  btn-outline-${props.mode === "light"?"dark":"light"}`} onClick={props.red} htmlFor="btnradio4">Red</label>
</div>

      {/* `<div className={`form-check form-switch text-${props.mode=== "light"? "dark":"light"}`}>
  <input className="form-check-input" type="checkbox" onClick={props.togglemode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode=== "light"? "Enable":"Disable"} Darkmode`}</label>
</div>` */}
  </div>
</nav>    

  )
}

Navbar.propTypes = {
    abouttext : PropTypes.string,
    tilte : PropTypes.string,
}
