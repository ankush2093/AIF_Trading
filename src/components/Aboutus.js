import React from 'react';
import "../CSS/Aboutus.css";
import myMisson from '../img/missions.png';
import aboutMe from '../img/aboutme.png';
import viSion from '../img/visons.png';
import OwnerLogo from '../img/ownerlogo.jpeg'

const Aboutus = () => {


    return (
        <>
            <div className='content-main-box'>
                <div className='content-box'>
                    <img className='aboutusimages' alt='logo' src={aboutMe}></img>

                </div>
                <div className='content-box'>
                    <h1 className='aboutheader'>About AIF Trading Academy</h1>
                    <p className='aboutuscontent'>Welcome to AIF Trading Academy! We are dedicated to empowering individuals with the knowledge and skills to thrive in the world of stock market trading and investing. Our comprehensive training programs cover a wide range of topics, including technical analysis, fundamental analysis, option trading, intraday trading, and long-term investing. What sets us apart is our commitment to not only providing top-notch education but also facilitating job placements for our talented students in related fields. At AIF Trading Academy, we believe in creating opportunities and nurturing the future of the stock market industry.</p>

                </div>
            </div>
            {/* Missions  Section*/}
            <h1 className='misson-visson-header'>Mission & Vision </h1>
            <div className='content-main-box'>

                <div className='content-box'>

                    <div className='testdemp'>
                        <img alt='misson' className='logo-of-missons' src={myMisson}></img>
                        <h4>Misson</h4>
                    </div>
                    <p className='missonandvissoncontent'> Our mission at AIF Trading Academy is crystal clear: to create 10 million independent stock market traders in India. We are driven by the belief that financial independence is attainable through education and skill development. By imparting valuable knowledge and fostering a community of traders, we aim to transform lives and contribute to the economic growth of our nation. Our relentless dedication to this mission is what fuels our passion and commitment every day.</p>

                </div>

                <div className='content-box'>

                    <div className='testdemp'>
                        <img alt='logoofmissons' className='logo-of-missons' src={viSion}></img>
                        <h4>Vision</h4> </div>
                    <p className='missonandvissoncontent'>Our vision is to be the leading catalyst for financial empowerment in India. We envision a future where individuals from all walks of life have the confidence and expertise to navigate the complexities of the stock market. By making 10 million independent stock market traders, we aim to create a ripple effect of economic prosperity, innovation, and financial security across the country. Our vision is not just a dream; it's a roadmap that guides every action we take.</p>

                </div>
            </div>

            {/* Founder Section with ceoo */}

            <div className="founder-container">
                <div className="founder-image">
                    <img  src={OwnerLogo} alt="Founder" />
                </div>
                <div className="founder-details">
                    <h2>Founder & CEO Faizan Khan</h2>
                    <p>
                        I am Faizan Khan, the founder of AIF Trading Academy. AIF, which stands for the first letter of my name, symbolizes my dedication to this venture. With a deep-rooted passion for the stock market and a belief in the power of education, I embarked on this journey to make a difference in the lives of aspiring traders and investors. My experience and expertise in the field have led me to envision a future where financial independence is within reach for everyone. Together with our dedicated team, I am committed to turning this vision into reality, one student at a time.
                    </p>
                </div>

            </div>
      
        </>
    )
}

export default Aboutus