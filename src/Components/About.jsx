import React from 'react';
import aboutimage from '../images/about.png'

export default function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt='' />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>At AHAMSON’s we Design, Build and Support IT & Telecom networks for many regional leading public and private sector companies. We offer a full life-cycle of network integration services – design, build, operate and support of customer networks. With a unique operational model, best of breed portfolio and technical expertise around complex networking, we support known companies.</p>
        <button>READ MORE</button>
      </div>
    </div>
  )
}
