import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react'
import './Footer.css';
import logo from '../images/logo.png';

export default function Footer() {
  return (
    <div id='footer'>
        <footer className='footr'>
            <div className='row'>
                <div className='col'>
                    <img src={logo} alt='' />
                    <p>
                    We offer a full life-cycle of network integration services – design, build, operate and support of customer networks. With a unique operational model, best of breed portfolio and technical expertise around complex networking.
                    </p>
                </div>
                <div className="col">
                    <h3>Office</h3>
                    <p>3rd Floor, Al-Baber Centre, F-8 Markaz</p>
                    <p>Islamabad, Pakistan</p>
                    <p className='email-id'>ahamson@gmail.com</p>
                </div>
                <div className="col">
                    <h3>Links</h3>
                    <ul>
                        <li><a href='#'>Header</a></li>
                        <li><a href='#'>Feactures</a></li>
                        <li><a href='#'>Offer</a></li>
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul>
                </div>
                <div className="col">
                <h3>Social Media Links</h3>
                <div className='social-links'>
      <FaGithub className='ic1' />
      <FaInstagram className='ic2'/>
      <FaLinkedin  className='ic3'/>
    </div>
                       
                    
                </div>
            </div>
        </footer>
    </div>
  )
}
