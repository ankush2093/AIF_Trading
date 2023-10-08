// import React, { useState } from 'react';
// import "../CSS/Navbar.css";
// import { NavLink ,Link} from 'react-router-dom';
// import WebSiteLogo from '.././img/logowebsite.png'



// const Header = () => {
//   const [activeLink, setActiveLink] = useState('Home');

//   const handleLinkClick = (activeLink) => {
//     setActiveLink(activeLink);
//   };
 

//   return (
//     <div className='' >    
//       <nav className="navbar">
//       <Link  to='/'> <div className="logo">
//         <img alt='logo' src={WebSiteLogo}></img> </div></Link>
//       <ul className="nav-links">
//         <li> 
//           <NavLink to='/'><a href="/"
//             className={activeLink === 'Home' ? 'active' : ''}
//             onClick={() => handleLinkClick('Home')}
//           >
//             Home
//           </a> </NavLink>
//         </li>

//         <li>
//           <NavLink to='Carrier'>
//           <a href="#"
//             className={activeLink === 'Carrier' ? 'active' : ''}
//             onClick={() => handleLinkClick('Carrier')}
//           >
//            Carrier
//           </a> </NavLink>
//         </li>



//         <li>
//           <NavLink to='/Aboutus'>
//             <a href="#"
//               className={activeLink === 'About' ? 'active' : ''}
//               onClick={() => handleLinkClick('About')}
//             >
//               About
//             </a></NavLink>
//         </li>
//         <li>
//           <NavLink to='Services'>
//             <a href="#"
//             className={activeLink === 'Services' ? 'active' : ''}
//               onClick={() => handleLinkClick('Services')}>
//               Services
//             </a></NavLink>

//         </li>
//         <li>
//           <NavLink link to='Contactus'>
//           <a href="#"
//             className={activeLink === 'Contact' ? 'active' : ''}
//             onClick={() => handleLinkClick('Contact')}
//           >
//             Contact
//           </a></NavLink>
//         </li>
//       </ul>
//     </nav>
//     </div>

//   )
// }

// export default Header

import React, { useState } from 'react';
import "../CSS/Navbar.css";
import { NavLink, Link } from 'react-router-dom';
import WebSiteLogo from '../img/logowebsite.png'; // Fixed import path

const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');
// eslint-disable-next-line

  const handleLinkClick = (activeLink) => {
    setActiveLink(activeLink);
  };

  return (
    <div className="">
      <nav className="navbar">
        <Link to="/">
          <div className="logo">
            <img alt="Website Logo" src={WebSiteLogo} />
          </div>
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink
              exact // Use exact to match only "/" for Home
              to="/"
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/Carrier" onClick={() => handleLinkClick('Carrier')}>
            Career
            </NavLink>
          </li>

          <li>
            <NavLink to="/Aboutus" onClick={() => handleLinkClick('About')}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/Services" onClick={() => handleLinkClick('Services')}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contactus" onClick={() => handleLinkClick('Contact')}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
