import React, { useState, useEffect, useRef } from "react";
import Typed from 'typed.js';
import { Container, Row, Col } from 'react-bootstrap';
const Home = () => {
    const typedElement = useRef(null);
    
  useEffect(() => {
    const options = {
      strings: [
       
        "Hi, I'm <span class='highlight'>Ravali Boorla</span><br><strong>React.Js developer</strong>",
      ],
      typeSpeed: 150,
      backSpeed: 0,
      smartBackspace: true,
      loop: true
    };

    if (typedElement.current) {
      const typed = new Typed(typedElement.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []); 

    return (
        <> 
           <div className="justify-content-center align-items-center">
            <div className="text-center animation">
              <img src='./images/r7.jpeg'className="home_image img-fluid"/>
            </div>
            
           <span ref={typedElement} className="typedtext"></span>
           <div className="animation">
           <p className="about_para_text mt-5">I am a front-end developer with 2 years of experience specializing in React.js. Proficient in React.js, JavaScript, HTML, and CSS, with skills in UI design, teamwork, and troubleshooting. Eager to contribute to dynamic projects.</p>
           </div> 
           </div>
        </>

    )
}
export default Home;