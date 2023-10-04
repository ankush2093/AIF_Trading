import React from 'react';
import PageNotFound  from '../img/PagenotFound.jpg'
import '../CSS/pagenotfound.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
    <div className='main-pagenot'>
      <img alt='errorpagelogo' src={PageNotFound}></img>
    </div>

<div className='errpagebtn'>
<Link to='/'><button>Go Back to Home Page</button></Link>
</div></>
  )
}

export default ErrorPage