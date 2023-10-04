import React from 'react';
import "../CSS/services.css";
import couseWeOffer from '../img/coursesweoffer.png';
import BuildWealth from '../img/Build-Wealth.png';
import Hardness from '../img/Harness.png';
import Seize from '../img/Seize.png';
import PortFolio from '../img/portfolio.png';
import MainPayment from './payment/MainPayment';


const Services = () => {
  return (
    <>
      <div className='content-main-box'>
        <div className='content-box'>
          <img className='aboutusimages' alt='logo' src={couseWeOffer}></img>

        </div>
        <div className='content-box'>
          <h1 className='aboutheader'>Courses we offer</h1>
          <h1 className='aboutheader'>1.Technical Analysis Pro Unlock the Secrets of Charts:</h1>
          <i> Dive into the world of technical analysis, where you'll learn how to decipher price charts and identify key patterns. Discover how to use technical indicators effectively to predict market trends and make informed trading decisions. Whether you're a beginner or experienced trader, this course will enhance your technical analysis skills and boost your confidence in navigating the stock market.
            Fundamental Investing Blueprint.</i>

          <div className='payment'>
            <MainPayment></MainPayment>
          </div>
        </div>
      </div>

      <div className='content-main-box'>

        <div className='content-box'>
          <h1 className='aboutheader'>2.Build Wealth with Knowledge</h1>
          <i> In this comprehensive course, you'll gain the skills needed for successful long-term investing. Dive deep into the world of financial statements, valuation techniques, and company fundamentals. Learn how to identify undervalued stocks and build a resilient investment portfolio. Whether you're a novice investor or looking to refine your fundamental analysis skills, this course is your pathway to financial prosperity.
            Options Trading Mastery.</i>
            <div className='payment'>
            <MainPayment></MainPayment>
          </div>
        </div>

        <div className='content-box'>
          <img className='aboutusimages' alt='logo' src={BuildWealth}></img>

        </div>
      </div>

      <div className='content-main-box'>
        <div className='content-box'>
          <img className='aboutusimages' alt='logo' src={Hardness}></img>
        </div>
        <div className='content-box'>
          <h1 className='aboutheader'>3.Harness the Power of Derivatives</h1>
          <i>Options trading can be a game-changer in your investment strategy. This course takes you on a journey through various options trading strategies, from income generation to risk management. You'll learn how to leverage derivatives to your advantage, whether you're a conservative investor or an options enthusiast.
            Intraday Trading Intensive</i>
            <div className='payment'>
            <MainPayment></MainPayment>
          </div>
        </div>
      </div>



      <div className='content-main-box'>

        <div className='content-box'>
          <h1 className='aboutheader'>4.Seize Intraday Opportunities</h1>
          <i>Are you ready for the fast-paced world of intraday trading? This intensive course equips you with the tools and strategies needed to thrive in this dynamic environment. Explore intraday trading techniques, chart analysis, and risk mitigation strategies. If you aspire to make quick and precise trading decisions, this course is your gateway to mastering intraday trading.
          </i>
          <div className='payment'>
            <MainPayment></MainPayment>
          </div>
        </div>
        <div className='content-box'>
          <img className='aboutusimages' alt='logo' src={Seize}></img>
        </div>
      </div>

      <div className='content-main-box'>
        <div className='content-box'>
          <img className='aboutusimages' alt='logo' src={PortFolio}></img>
        </div>
        <div className='content-box'>
          <h1 className='aboutheader'>5.Portfolio Management & Wealth Creation Secure Your Financial Future</h1>
          <i>This course is designed for those who aim to create lasting wealth through portfolio management. Learn the art of diversification, asset allocation, and risk management to build a robust investment portfolio. Whether you're a seasoned investor or just beginning your wealth-building journey, this course provides the knowledge and strategies to secure your financial future..</i>
          <div className='payment'>
            <MainPayment></MainPayment>
          </div>
        </div>


      </div>



    </>

  )
}

export default Services