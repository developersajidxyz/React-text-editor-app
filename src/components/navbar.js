import React, { useState } from 'react'
// import ReactSwitch from 'react-switch';
import PropTypes from 'prop-types'
// import './App.css'; // Make sure to have your CSS file with light and dark mode styles

export default function Navbar({ theme, toggleTheme, props}) {
//     const [checked, setChecked] = useState(true);

//   const handleChange = val => {
//     setChecked(val)
  
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-light bg-light navbar-${theme === 'dark' ? 'dark' : 'light'} bg-${theme}`}>
            <a className="navbar-brand" href="/">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/about">About <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="/contact">Contact <span className="sr-only">(current)</span></a>
                </li>
                </ul>
                {/* <div className="app" style={{textAlign: "center"}}>
                    <h4>Toggle switch in React</h4>
                    <ReactSwitch
                        checked={checked}
                        onChange={handleChange}
                    />
                </div> */}
                <button className={`btn btn-${theme === 'dark' ? 'light' : 'secondary'} h-200`} onClick={toggleTheme}>
                    Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
                </button>
            </div>
        </nav>
    </>
  )
}