import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaGitlab,
} from "react-icons/fa";


import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/Motvies.png';

const Footer = () => {
  return (
    <div className='footer' style={{backgroundImage: `url(${bg})`}}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to= "/">Motvies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top IMDB</Link>
          </div>
          <div className="infoText">
          Made By Adnan Haider(Full stack Developer).
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a style={{ color: "white" }} href="https://github.com/AdnanMehr8"><FaGithub /></a>
          </span>
          {/* <span className="icon">
            <a style={{ color: "white" }} href="https://gitlab.com/mvaibhav131"><FaGitlab /></a> 
          </span> */}
          {/* <span className="icon">
            <a style={{ color: "white" }} href="https://www.instagram.com/vaibhavmore1997/"><FaInstagram /></a> 
          </span>
          <span className="icon">
            <a style={{ color: "white" }} href="https://twitter.com/mvaibhav131"><FaTwitter /></a> 
          </span> */}
          <span className="icon">
            <a style={{ color: "white" }} href="https://www.linkedin.com/in/adnanhaider21421525/"><FaLinkedin /></a> 
          </span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;