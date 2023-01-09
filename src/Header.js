import React from 'react'
import "./Header.css"
import Particle from './config/Particle'
import ParticleNew from './config/ParticleNew'
import { Link } from 'react-router-dom';
import Sleepy2 from './SLEEPYHOURGLASS3.png'


function header() {

  function handleClick() {
    console.log("Hello, ninja");
  }
  
  return (
    <div className='Header'>
      <div className='header-container'>
        <div className='title-container'>
          <h1 className='title'>SLEEPY SOLUTIONS</h1>
          </div>
          <Particle/>
        <nav className='header-nav'>
        <Link to="/"><button className='navbutton'> HOME</button></Link> 
        <Link to="/quote"><button className='navbutton'>QUOTE</button></Link>
        <button className='navbutton'>DONATE</button>
        </nav>
        </div>
        
        <article className='accordion'>
          <section>
            <h1 className='heading'>Who are we?</h1>
            <div className='accordion_content1' >
            <p> <strong><big>Sleepy Solutions</big></strong> is the one stop shop for all your file digitizing needs.</p>
              <h3>LOCATION</h3>
            <h4>HUNTSVILLE, AL</h4>
            <h4>USA</h4>
            </div>
          </section>
          <section>
            <h1 className='heading'>What do we do?</h1>
          <div className='accordion_content2'>
          <p>We digitally archive, encrypt, and even destroy any of your paper files.</p>
          <p>At any given time your paper data can be destroyed by a multitude of unforseen events.</p>
          <p>These are not limited to flood, fire, natural disaster, and even internal malfeseance.</p>
          <p>Don't leave your clients, your company, and yourself vulnerable, get a quote and let us back up your files.</p>
          </div>
          </section>
          <section>
          
            <h1 className='heading'>How does this serve you?</h1>
            <div className='accordion_content3' >
          <p>With our future swiftly moving into the digital sphere
         it is best to be prepared and see that your company is not behind
          in the transition into the new age.</p> 
          <p>We take the headache of this task off you
         and your employees making it easier to sleep at night
          knowing your precious files are archived, encrypted, and safe from danger.</p>
          
          </div>
            </section>
        </article>
<div className='logo-container'><img className='logo2' src={Sleepy2} alt="" galleryimg="no"/></div>
        
        </div>
  )
}

export default header;