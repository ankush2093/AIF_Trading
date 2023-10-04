import React from 'react';
import '../payment/payment.css'



const MainPayment = () => {
  


   // Initialize useHistory

  // const handlePayment = () => {

  //   const options = {
  //     key: razorpayKey,
  //     amount: 1000000, // Amount in paise (₹1000)
  //     currency: 'INR',
  //     name: 'AIF Trading Academy',
  //     description: 'Course',
  //     image: WebLgo, // Replace with your logo URL
  //     order_id: '', // This will be filled after creating an order on the server
  //     handler: function (response) {
  //       alert(`Payment ID : ${response.razorpay_payment_id} : Keep Screen Short for Refrence`);

  //       // Check if the payment was successful
  //       if (response.razorpay_payment_id) {
  //         // Navigate to the home page after successful payment
  //        Navigate('/');
  //       }
  //     },

  //     prefill: {
  //       email: '',
  //       contact: '',
  //     },
  //     notes: {
  //       address: 'Customer Address',
  //     },
  //     theme: {
  //       color: '#528FF0',
  //     },
  //   };

  //   const rzp1 = new window.Razorpay(options);
  //   rzp1.open();
  // };


  return (
    <div className='main_pay_dv'>

      <h5>Price Only: ₹10,000</h5>
    

      {/* <button  className='btnpay' onClick={handlePayment} >Enroll Now </button> */}
     <a href='https://rzp.io/l/5BMeVdYsGe' target='blank'>  <button  className='btnpay'  >Enroll Now </button> </a>
    </div>
  )
}

export default MainPayment;

