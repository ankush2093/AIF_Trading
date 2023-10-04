import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import '../CSS/carrier.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import viSion from '../img/carrierbackground.jpg';

function Carrier() {
    const divStyle = {
        backgroundImage: `url(${viSion})`, // Set the background image using the imported image variable
    backgroundSize: 'cover',
    opacity: 20, 
    };


    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_afawkso', 'template_llzvl8t', form.current, 'xAY7xTiGjbWt_OUNK')
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
        
        <div className='carierheadering'>
                <h1> For campus placement,  Internship & Franchise.</h1>
                <i>Mail us at <span className='ownermai'>aiftradingacademy@gmail.com </span> in or fill the form to connect
                    with our human resource team.</i>

            </div>
        
        
     
        <form className="contact-form" ref={form} onSubmit={sendEmail}>


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
                Phone Number:
                <input
                    type="number"
                    name="mobile_number"
                    required
                />
            </label>

            <label>
                Subject:
                <input
                    name="Subject"

                ></input>
            </label>



            <label>
                Message:
                <textarea
                    name="message"
                    required
                ></textarea>
            </label>
            <button type="submit">Submit</button>

            <ToastContainer />
            <span className='Greetingmessage'>{done && "We will contact you soon! Don't spam"}</span>
        </form>
        </div>
    );
}

export default Carrier;
