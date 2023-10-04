import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../CSS/carrier.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import viSion from '../img/contact_us_bg.jpg';

const Contactus = () => {
    const divStyle = {
        backgroundImage: `url(${viSion})`, // Set the background image using the imported image variable
    backgroundSize: 'cover',
    opacity: 20, 
    };


    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('contactus_dgybx4g', 'template_wu90t1f', form.current, 'xAY7xTiGjbWt_OUNK')
            .then((result) => {
                console.log(result.text);
                // alert(result.text +" Sucess fully sned to us");
                toast("thanks for connecting with me")
                setDone(true);
            }, (error) => {
                alert(error.text + "Error");

            });

    };

  return (
    <div className='mai-div' style={divStyle}>
        
    
    
    
 
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
    <div className='carierheadering'>
            <h1>Contact Us*</h1>
           

        </div>

        <label>
            Name:
            <input
                type="text"
                name="user_name"
                required
            />
        </label>
        <label>
            Email:
            <input
                type="email"
                name="user_email"
                required
            />
        </label>
        
        <label>
            Mobile:
            <input
                type="number"
                name="mobile_number"
                required
            />
        </label>

        <label>
            Message:
            <textarea
                name="message"
                required
            ></textarea>
        </label>
        <button type="submit">Send</button>
        <p>24*7 Support Service</p>

        <ToastContainer />
        <span className='Greetingmessage'>{done && "We will contact you soon! Don't spam"}</span>
    </form>
    </div>
  )
}

export default Contactus