import React from 'react';
import '../details/details.css'

const Details = () => {
    return (
        <>
            <div className='details_content'>
                <h1>Most Trusted Stock Market Training Institute</h1>
               
            </div>

            <div className='parent'>
                <div className='child'>
                    <img alt="logo"src='https://www.niftytradingacademy.com/img/graph-purple.svg'></img>
                    <div className='contentdivtxt'>
                        <h6>Live F&O Trade Class</h6>
                        <p>We provide the best online live sessions on future and options trading. NTA@ online Stock Market Course includes query discussions and various</p>

                    </div>
                </div>
                <div className='child'>
                    <img alt='logo' src='https://www.niftytradingacademy.com/img/money-purple.svg'></img>
                    <div className='contentdivtxt'>
                        <h6>100% Money Back Guarantee*</h6>
                        <p>AIF Trading Academy is the only online share market training class that guarantees you excellence in stock market trading or a 100% money-back facility.</p>

                    </div>
                </div>
                <div className='child'>
                    <img alt='logo' src='https://www.niftytradingacademy.com/img/membership-purple.svg'></img>
                    <div className='contentdivtxt'>
                        <h6>Lifetime Membership</h6>
                        <p>Provides students with the facility to repeat the course freely. Our team helps you build confidence in stock market investment. Join us to become financially independent.</p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Details