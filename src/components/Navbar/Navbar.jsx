import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const [mobileMenu, setMobileMenu]=useState(false);
  const toggleMenu=()=>{
    setMobileMenu(!mobileMenu)
  }
  return (
    <nav className={`container ${sticky?"dark-nav":""}`} >
      <img src={logo} alt="logo" className="logo" />
      <ul className={`menu-items ${mobileMenu?"":"hide-mobile-menu"}`}>
        <li ><Link onClick={toggleMenu} to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li ><Link onClick={toggleMenu} to="program" smooth={true} offset={-260} duration={500}>Program</Link></li>
        <li ><Link onClick={toggleMenu} to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li ><Link onClick={toggleMenu} to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li ><Link onClick={toggleMenu} to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li ><Link onClick={toggleMenu} to="contact" smooth={true} offset={-260} duration={500}>
          <button className="btn">Contact Us</button>
        </Link></li>
      </ul>
      <img src={menu_icon} alt="menu-icon" className="menu-icon" onClick={toggleMenu}/> 
    </nav>
  );
};

export default Navbar;
