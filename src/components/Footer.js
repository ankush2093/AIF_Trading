import React, { useState } from 'react';
import "../CSS/Navbar.css";
import { NavLink, Link } from 'react-router-dom';
import '../CSS/Footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdbreact';
const Footer = () => {

  const [activeLink, setActiveLink] = useState('Home');

  const handleLinkClick = (activeLink) => {
    setActiveLink(activeLink);
  };
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
         
       
        </div>

        <div className='social-div'>
          <a className='fb' target='_blank' href='https://www.facebook.com/profile.php?id=61551784074616&mibextid=ZbWKwL.' className='me-4 text-reset'>
            <MDBIcon  fab icon="facebook-f" />
          </a>
          <a className='insta' target='_blank' href='https://instagram.com/aiftradingacademy?igshid=NjIwNzIyMDk2Mg==' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a className='linkdin' target='_blank' href='https://www.linkedin.com/company/mba-trading-wala-learning/' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
        
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5' >
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                AIF Trading Academy
              </h6>
              <p>
              Filled with potential and boosted by millions of dreams and aspirations, India is developing faster in every domain. At AIF Trading Academy, we are propelled by the thought and ambition that makes India charge ahead and acquire a prominent place in the global market.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4' >
              <h6 className='text-uppercase fw-bold mb-4'>Quick Links</h6>
              <p>
              <NavLink to='/'>    <a className='text-reset'>
                Home
                </a></NavLink>
              </p>

              <p>
              <NavLink to='Carrier'> <a className='text-reset'>
                Carrier
                </a> </NavLink>
              </p>


              <p>
              <NavLink to='/Aboutus'> <a className='text-reset' >
                 About
                </a></NavLink>
              </p>


              <p>
              <NavLink to='Services'> <a className='text-reset'>
                 Services
                </a></NavLink> 
              </p>
              <p>
              <NavLink link to='Contactus'>   <a  className='text-reset'>
                 Contact
                </a></NavLink> 
              </p>
            </MDBCol>

            
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                A-1183 N.S.MAzadpur Delhi-33, Azadpur, New Delhi, Delhi 110033
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                aiftradingacademy@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +91 9523880973
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'black' }}>
        © 2023 Copyright:
      <Link to='/'>  <a className='text-reset fw-bold' >
        AIF Trading Academy
        </a></Link>
      </div>
    </MDBFooter>
  )
}

export default Footer