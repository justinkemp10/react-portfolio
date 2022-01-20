import React from 'react';
import aboutImage from '../../src/avatar2.jpg';

function About() {
    return (
        <section id='about'>
            <div className='about-image-container'>
              <img alt="avatar" className='about-image' src={aboutImage}></img>
            </div>
            <div className='about-container'>
                <h1 className='about-header'>
                    Hi, my name is Justin and I'm a web developer.
                </h1>
                <p className='about-description'>
                    I am currently a student in the Northwestern full stack coding boot camp. I am eager to start a career in coding!
                </p>
            </div>
            <div className="about-links">
            <a
              href="#contact"
              className="contact-link">
              Contact Me
            </a>
            <a
              href="#portfolio"
              className="portfolio-link">
              See My Portfolio
            </a>
          </div>
        </section>
    );
};

export default About;
