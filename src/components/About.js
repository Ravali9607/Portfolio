import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export const About = () => {
    const downloadResume = () => {
        const pdfUrl = "/pdf/Ravali-Boorla.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Ravali-resume.pdf";
        link.click();
    }
    return (

        <Row className='d-flex'>
            <Col md={12}>
                <div className='text-center'>
                    <h1 className="about_text">ABOUT ME</h1>
                </div>
            </Col>
            <Col md={6}>
                <div className="d-flex img_animation">
                    <img src="./images/r6.jpeg" alt='aboutpic' className='img-fluid img2' style={{ border: "4px solid #FFFF80", borderRadius: "4px" }} />
                </div>
            </Col>
            <Col md={6}>
                <div className='img_animation1 img-fluid'>
                    <h1 style={{ color: "white" }}>Hi! I'm <span class='highlight'>Ravali Boorla</span></h1>

                    <p className='textsize'><span className="label">Name:</span> Ravali Boorla</p>
                    <p className='textsize'><span className="label">Phone:</span> 9874563210</p>
                    <p className='textsize'><span className="label">Email:</span> boorlaravali96@gmail.com</p>
                    <p className='textsize'><span className="label">From:</span> Karimnagar</p>
                    <p className='textsize'><span className="label">Language:</span> English, Telugu.</p>
                </div>
                <div className='img_animation1'>
                    <button class='btn btn-primary' onClick={downloadResume}>Download Resume</button>
                </div>
            </Col>
            <Col xs={12} md={12}>
                <div className='text-center mt-5 skills_animation'>
                    <h1 className='my_skills'>MY SKILLS</h1>
                </div>
            </Col>
            <Col md={6}>
                <div className='animation_skills' id="animation_skills2">
                    <div className='skills_animation'>
                        <h5 className='skills_text'>Html5 - <span className='skill_percentage'>(95%)</span></h5>
                        <div className="bar-container">
                            <div className="html5" id="html"></div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h5 className='skills_text'>Javascript - <span className='skill_percentage'>(80%)</span></h5>
                        <div className="bar-container">
                            <div className="javascript"></div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h5 className='skills_text'>React Js -<span className='skill_percentage'>(80%)</span></h5>
                        <div className="bar-container">
                            <div className="react"></div>
                        </div>
                    </div>
                </div>
            </Col>

            <Col md={6}>
                <div className='animation_skills' id="animation_skills">
                    <div className=''>
                        <h5 className='skills_text'>Css - <span className='skill_percentage'>(90%)</span></h5>
                        <div className="bar-container">
                            <div className="css"></div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h5 className='skills_text'>Bootstrap - <span className='skill_percentage'>(90%)</span></h5>
                        <div className="bar-container">
                            <div className="bootstrap"></div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h5 className='skills_text'>Redux - <span className='skill_percentage'>(75%)</span></h5>
                        <div className="bar-container">
                            <div className="redux"></div>
                        </div>
                    </div>
                    <div className='mt-5'></div>
                </div>
            </Col>

        </Row>

    );
};


