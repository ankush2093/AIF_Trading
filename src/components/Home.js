import React from 'react';
import StudentReviewSlider from './slider_rating/StudentReviewSlider';
import "../CSS/Home.css";
import Accordion from './faqsection/Accordion';

import AbotUSimg from '../img/my1st pic.png'
import MyBackground from '../img/home_page_background.gif'
import { Link } from 'react-router-dom';
import Services from './Services';
import Details from './details/Details';


const Home = () => {
    const divStyle = {
        backgroundImage: `url(${MyBackground})`,
        backgroundSize: 'cover',

    };
    return (
        <>
            <div style={divStyle}>

                <div className="centered-content">
                    <h1>Finance is <span>Future</span> </h1>
                    <p>A successful trader aims for the best <br></br> trades; Money is SECONDARY!</p>
                </div>

            </div>

            <Details></Details>
            <div className='content-main-box'>
                <div className='content-box'>
                    <h1>AIF Trading  Academy</h1>
                    <i>AIF Trading  is known for its exceptional teaching approach! From basic theoretical knowledge to live trading workshops and practical performance, we teach you to trade innovatively and interestingly.</i> <br></br>
                    <p1 className='new'><i class="fa-solid fa-check"> </i>
                        &nbsp;    Derivative trading </p1>
                    <p1 className='new'><i class="fa-solid fa-check"> </i>
                        &nbsp;     Equity trading </p1>
                    <p1 className='new'><i class="fa-solid fa-check"> </i>
                        &nbsp;     Swing trading </p1>
                    <p1 className='new'><i class="fa-solid fa-check"> </i>
                        &nbsp;     Short term investing </p1>
                    <p1 className='new'><i class="fa-solid fa-check"> </i>
                        &nbsp;     Long term investing </p1>
                    <p1 className='new'><i class="fa-solid fa-check"> </i>
                        &nbsp;    Option trading </p1>
                    <p1 className='new'><i class="fa-solid fa-check"> </i>
                        &nbsp;     Trading for living </p1>
                    <p1 className='new'><i class="fa-solid fa-check"> </i>
                        &nbsp;     Trading for future </p1>


                    <Link to='Aboutus'> <div className='know_morebtn'>
                        <button className='btnknowmore'>KNOW MORE</button>
                    </div></Link>
                </div>

                

                <div className='content-box'>
                    <img className='aboutusimages' alt='logo' src={AbotUSimg}></img>

                </div>

            </div>

            <Services></Services>

                        {/* Our Supports */}
                        <div className='Our-Supports-main-box'>
                <div className='databox'>
                    <i class="fa-solid fa-person"></i> <h1>2K+</h1>
                    <p>STUDENTS MENTORED </p>

                </div>

                <div className='databox'>

                    <i class="fa-solid fa-video"></i>   <h1>300+</h1>
                    <p>SESSIONS FINISHED</p>
                </div>

                <div className='databox'>

                    <i class="fa-brands fa-slack"></i>   <h1>300+</h1>
                    <p>STUDENTS PLACEMENT</p>
                </div>


                <div className='databox'>

                    <i class="fa-brands fa-google"></i>  <h1>4.8K</h1>
                    <p>GOOGLE RATINGS</p>
                </div>
            </div>
            <StudentReviewSlider></StudentReviewSlider>






            {/* Faq Swction */}
            <Accordion></Accordion>


            {/* Chat with us on whats aap */}
            <div className='chatwith-us'>
                <a rel="noreferrer" href="https://wa.me/9523880973/?text=Hello%2C%20I%20have%20a%20question" target="_blank">

                    <i class="fa-brands fa-whatsapp"> </i> <span className='chat-text'>Chat With Us</span></a>
            </div>

            <div className='offer-btn-main-div'>
                <Link to="/Services" >   <button className="blink-button">     <i class="fa-solid fa-gift"></i> Limited Offer 50% OFF  BookNow</button></Link>
            </div>


        </>

    )
}

export default Home;