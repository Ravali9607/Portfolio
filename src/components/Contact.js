import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    return (
        <Container>
            <Row>
                <Col md={12} >
                    <div className="text-center">
                        <h3 className="contactus" style={{ color: "white" }}>Contact Us</h3>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={6} lg={6} xs={12}>
                    <div className="d-flex flex-column justify-content-start">
                        <div className="centers">
                            <FontAwesomeIcon icon={faPhone} className="icon_phone" />
                        </div>
                        <div className="text_div">
                            <h3 className="email_text">Phone</h3>
                            <small className="email">8523049607</small>
                        </div>
                        <div className="centers">
                            <FontAwesomeIcon icon={faEnvelope} className="icon_phone" />
                        </div>
                        <div className="text_div">
                            <h3 className="email_text">Email</h3>
                            <small className="email">boorlaravali96@gmail.com</small>
                        </div>

                        <div className="centers">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon_phone1" />
                        </div>
                        <div className="text_div">
                            <h3 className="email_text">Address</h3>
                            <small className="email">Hyderabad</small>
                        </div>

                    </div>
                </Col>
                <Col md={6}>
                    <h1 style={{ color: "white" }}>Get In Touch</h1>
                    <div className="bg">
                        <div class="card-body bg">
                            <form >
                                <div class="form-floating mb-3" >
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Your Name</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Subject</label>
                                </div>
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }}></textarea>
                                    <label for="floatingTextarea2">Comments</label>
                                </div>
                                <div className="btn-text">
                                    <button className="btn btn-success">Send Message</button>
                                </div>
                              
                            </form>
                          
                            
                        </div>
                    </div>

                </Col>
            </Row>


        </Container>
    )
}
