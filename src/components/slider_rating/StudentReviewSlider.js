import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../../CSS/Studentratingslider.css';
import Rajeshimg from '../../ratingimg/rajesh.jpeg';
import Davidimg from '../../ratingimg/david.jpeg';
import Emilyimg from '../../ratingimg/Emily.jpeg';
import Priyaimg from '../../ratingimg/Pryia.jpeg';
import Aleximg from '../../ratingimg/AlexP.jpeg';
import Lisaimg from '../../ratingimg/Lisa.jpeg';
import Rohitimg from '../../ratingimg/Rohit.jpeg';
import Michael from '../../ratingimg/Michael.jpeg';
import Tinaimg from '../../ratingimg/Tina.jpeg';



const StudentReviewSlider = () => {
    return (
        <div className="slidecontainer">
            <h1 className="heading">Student Reviews</h1>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                className="swiper_container"
            >
                <SwiperSlide>
                    <img alt='logo' src={Rajeshimg}></img>
                    <div className='student-details'>
                        <h5 className='student-name'> Review by Rajesh S.</h5>
                        <p className='student-feedback'>
                        <i class="fa-solid fa-quote-left fa-2xs"></i> I completed the Options Trading Mastery course, and it exceeded my expectations. The course content is well-structured, and I appreciated the practical approach to options trading. Thanks to AIF, I now have a solid understanding of this complex field.
                        <i class="fa-solid fa-quote-right fa-2xs"></i>
                        </p>
                        <div className='ratting-star'>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        </div>

                    </div>

                </SwiperSlide>



                <SwiperSlide>
                    <img alt='logo' src={Emilyimg}></img>
                    <div className='student-details'>
                        <h5 className='student-name'>Review by Emily L.</h5>
                        <p className='student-feedback'>
                        <i class="fa-solid fa-quote-left fa-2xs"></i> I took the Fundamental Investing Blueprint course, and it was a fantastic experience. The instructors explained complex concepts in a simple and relatable way. I now feel equipped to analyze stocks and make informed investment decisions.
                        <i class="fa-solid fa-quote-right fa-2xs"></i>
                        </p>
                        <div className='ratting-star'>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>
                    <img alt='logo' src={Davidimg}></img>
                    <div className='student-details'>
                        <h5 className='student-name'> Review by David M.</h5>
                        <p className='student-feedback'>
                        <i class="fa-solid fa-quote-left fa-2xs"></i> Intraday Trading Intensive was an eye-opener for me. The course helped me develop a disciplined approach to intraday trading, which has significantly improved my results. AIF Trading Academy is the real deal!
                        <i class="fa-solid fa-quote-right fa-2xs"></i>
                        </p>
                        <div className='ratting-star'>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <img alt='logo' src={Priyaimg}></img>
                    <div className='student-details'>
                        <h5 className='student-name'> Review by Priya G.</h5>
                        <p className='student-feedback'>
                        <i class="fa-solid fa-quote-left fa-2xs"></i> Portfolio Management & Wealth Creation has transformed my approach to investing. I've learned how to build a diversified portfolio and mitigate risks effectively. AIF's guidance is invaluable for long-term wealth creation.
                        <i class="fa-solid fa-quote-right fa-2xs"></i>
                        </p>
                        <div className='ratting-star'>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>
                    <img alt='logo' src={Aleximg}></img>
                    <div className='student-details'>
                        <h5 className='student-name'>Review by Alex P</h5>
                        <p className='student-feedback'>
                        <i class="fa-solid fa-quote-left fa-2xs"></i> Algorithmic Trading Proficiency was exactly what I needed to take my trading to the next level. The instructors provided hands-on training in programming and algorithm development. Now, I can automate my trading strategies with confidence.

                        <i class="fa-solid fa-quote-right fa-2xs"></i>
                        </p>
                        <div className='ratting-star'>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <img alt='logo' src={Lisaimg}></img>
                    <div className='student-details'>
                        <h5 className='student-name'>Review by Lisa W</h5>
                        <p className='student-feedback'>
                        <i class="fa-solid fa-quote-left fa-2xs"></i> Behavioral Finance & Market Psychology was a unique course that added depth to my trading knowledge. Understanding market psychology has given me an edge in predicting market sentiment. AIF stands out for their holistic approach.

                        <i class="fa-solid fa-quote-right fa-2xs"></i>
                        </p>
                        <div className='ratting-star'>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        </div>

                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <img alt='logo' src={Rohitimg}></img>
                    <div className='student-details'>
                        <h5 className='student-name'>Review by Rohit B.</h5>
                        <p className='student-feedback'>
                        <i class="fa-solid fa-quote-left fa-2xs"></i> The Advanced Risk Management Strategies course is a must for any serious trader. I've learned how to protect my capital in volatile markets, and it has saved me from significant losses. AIF's focus on risk management is commendable.
                        <i class="fa-solid fa-quote-right fa-2xs"></i>
                        </p>
                        <div className='ratting-star'>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>
                    <img alt='logo' src={Michael}></img>
                    <div className='student-details'>
                        <h5 className='student-name'>Review by Michael H.</h5>
                        <p className='student-feedback'>
                        <i class="fa-solid fa-quote-left fa-2xs"></i> AIF Trading Academy's Cryptocurrency Trading Essentials course is timely and insightful. The cryptocurrency market can be intimidating, but this course simplifies it. I've started trading cryptocurrencies with confidence.
                        <i class="fa-solid fa-quote-right fa-2xs"></i>
                        </p>
                        <div className='ratting-star'>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        </div>

                    </div>

                </SwiperSlide>


                <SwiperSlide>
                    <img alt='logo' src={Tinaimg}></img>
                    <div className='student-details'>
                        <h5 className='student-name'>Review by Tina R</h5>
                        <p className='student-feedback'>
                        <i class="fa-solid fa-quote-left fa-2xs"></i> Earnings Season Strategies was a fantastic course that prepared me for trading during earnings reports. AIF provides real-world insights and strategies that are practical and effective. I've seen a significant improvement in my earnings season trading. 
                        <i class="fa-solid fa-quote-right fa-2xs"></i>
                        </p>
                        <div className='ratting-star'>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        <i class="fa-solid fa-star fa-lg"></i>
                        </div>

                    </div>

                </SwiperSlide>



            </Swiper>

     


        </div>
    );
};

export default StudentReviewSlider;
