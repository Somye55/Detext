import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'
import { motion } from "framer-motion";
import logolight from '../assets/logolight.png';
import logodark from '../assets/logodark.png';
export default function Navbar(props) {

  return (
    <motion.div
      className="container-fluid text-center p-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div >
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{ backgroundColor: `${props.mode === 'light' ? '#00b386' : '#003325'}`, color: 'white' }}>
          <div className="container-fluid">
              <a className="navbar-brand" href="/home">
                <img src={props.mode === 'light' ? logolight : logodark} width={'140'} alt="Text-Utilz" />
              </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home" activeclassname="active">{props.home}</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/textform" activeclassname="active">Textform</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about" activeclassname="active">About</NavLink>
                </li>
              </ul>

              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} d-flex justify-content-center align-items-center p-0`} style={{ fontStyle: 'normal', cursor:'pointer' }}>
                {props.mode === 'dark' ?
                  <img width="50" height="50" src="https://img.icons8.com/emoji/48/bright-button-emoji.png" alt="external-sun-weather-justicon-lineal-color-justicon-1" onClick={props.toggleMode} />
                  :
                  <img width="40" height="40" src="https://img.icons8.com/ios-glyphs/30/moon-symbol.png" alt="external-moon-astrology-flaticons-lineal-color-flat-icons" onClick={props.toggleMode} />
                }
                {/* <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label> */}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </motion.div>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired

}
Navbar.defaultProps = {
  title: "thisIsNavbar",
  home: "HomeSweetHome"
}

