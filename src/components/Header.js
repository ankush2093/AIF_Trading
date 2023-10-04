import React, { useState } from 'react';
import "../CSS/Navbar.css";
import { NavLink ,Link} from 'react-router-dom';
import WebSiteLogo from '.././img/logowebsite.png'
import viSion from '../img/navbg.png';


const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (activeLink) => {
    setActiveLink(activeLink);
  };
  const divStyle = {
    backgroundImage: `url(${viSion})`, // Set the background image using the imported image variable
backgroundSize: 'cover',
opacity: 10, 
};


  return (
    <div className='' >    
      <nav className="navbar">
      <Link  to='/'> <div className="logo">
        <img alt='logo' src={WebSiteLogo}></img> </div></Link>
      <ul className="nav-links">
        <li> 
          <NavLink to='/'><a
            className={activeLink === 'Home' ? 'active' : ''}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </a> </NavLink>
        </li>

        <li>
          <NavLink to='Carrier'>
          <a 
            className={activeLink === 'Carrier' ? 'active' : ''}
            onClick={() => handleLinkClick('Carrier')}
          >
           Carrier
          </a> </NavLink>
        </li>



        <li>
          <NavLink to='/Aboutus'>
            <a
              className={activeLink === 'About' ? 'active' : ''}
              onClick={() => handleLinkClick('About')}
            >
              About
            </a></NavLink>
        </li>
        <li>
          <NavLink to='Services'>
            <a className={activeLink === 'Services' ? 'active' : ''}
              onClick={() => handleLinkClick('Services')}>
              Services
            </a></NavLink>

        </li>
        <li>
          <NavLink link to='Contactus'>
          <a
            className={activeLink === 'Contact' ? 'active' : ''}
            onClick={() => handleLinkClick('Contact')}
          >
            Contact
          </a></NavLink>
        </li>
      </ul>
    </nav>
    </div>

  )
}

export default Header