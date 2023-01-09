import React from 'react'
import Particle from './config/Particle'
import ParticleNew from './config/ParticleNew'
import Particles from 'react-tsparticles'
import "./Quote.css"
import ReCAPTCHA from "react-google-recaptcha"
import { Link } from 'react-router-dom';
import Sleepy1 from './SLEEPYHOURGLASS2.png'
import emailjs from "emailjs-com"
import Recaptcha from "react-recaptcha"
import { Component } from 'react'




function sendEmail(e){
  e.preventDefault();

  emailjs.sendForm('service_jwhic0k', 'template_j20u77v', e.target, 'ImOMV_cuNa0Qh_V3x')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};
  



function Quote() {
  return (

   
    
<div className='about'>
<div className='title-container'>
          <h1 className='title'>SLEEPY SOLUTIONS</h1>
          </div>



  <div className='container'>
<Particle/>


  <Link to="/"><button className='navbutton1'> HOME</button></Link> 
  <Link to="/quote"><button className='navbutton1'>QUOTE</button></Link>
  <button className='navbutton1'>DONATE</button>

<div className="center-form">
    <div className='form-container'>
        <form className='form' onSubmit={sendEmail}>
 


  
  <ol>
  <h2>GET A QUOTE</h2>
    <li>
  <h4>SERVICE</h4>
  <select name="service" id="service">
    <option value="">paper file digital archiving</option>
    <option value="">paper file storage</option>
    <option value="">paper file destruction</option>
    <option value="">multiple services</option>

  </select>
</li>
<li>
  <h4>FILE AMOUNT</h4>
  <select name="volume" id="volume">
    <option value="">less than 10K </option>
    <option value="">up to 100k</option>
    <option value="">up to 500k</option>
    <option value="">500k+</option>

  </select>  
  
  <li> 
    <h4>YOUR INFO</h4> 
    <input type="text" name='company' placeholder='COMPANY NAME' /> <br />
    <input type="text" name='first-name' placeholder='FIRST NAME' /> <br />
    <input type="text" name='last-name' placeholder='LAST NAME' /> <br />

  </li>
</li>
    <li>
      <h4>CONTACT</h4>
      <input type="email" name="email" placeholder='BUSINESS EMAIL'/> <br />
      <input type="phone" name="phone" placeholder='BUSINESS PHONE'/> <br />

</li>
<li>
      <h4>DESCRIPTION</h4>
      <input className='input' type="text" name="additionals"  placeholder='ADDITIONAL SERVICE DETAILS'/> <br />
</li>
</ol>
  <input type="checkbox" name="" id="" placeholder='' /> <br />
  <em>You agree to the terms and conditions and to be contacted by a Sleepy Solutions specialist. </em> <br />
  
  <ReCAPTCHA 
  sitekey='6Le3d8whAAAAAMFbXcjhY56vYiMMGbIKHpbSP6K5'
className='center'/>
  <input className='navbutton' type="submit" value="SUBMIT" id='submitForm' />


</form>
</div>



</div>

    </div>
    
  
  <img className='logo' src={Sleepy1} alt=""/>


</div>
  )
}

export default Quote;