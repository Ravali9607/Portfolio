import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
    const onFormSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            <h3 style={{textAlign:'center',color:'white'}}><b>Contact Us</b></h3>
            <Row>
        <Col md={6} lg={6} xs={12}>
        <div>
        <div className="div1">
           <span>
           <FontAwesomeIcon icon={faEnvelope} className="icon_phone" />
           </span>
           <div className="text_div">
                            <h3 className="email_text">Email</h3>
                            <small className="email">boorlaravali96@gmail.com</small>
                        </div>
         </div>
         <div className="div1">
           <span>
           <FontAwesomeIcon icon={faPhone} className="icon_phone" />
           </span>
           <div className="text_div">
                            <h3 className="email_text">Phone</h3>
                            <small className="email">+91 9874563210</small>
                        </div>
         </div>
         <div className="div1">
           <span>
           <FontAwesomeIcon icon={faMapMarkerAlt} className="icon_phone1" />
           </span>
           <div className="text_div">
                            <h3 className="email_text">Address</h3>
                            <small className="email">Hyderabad</small>
                        </div>
         </div>
        </div>
        </Col>  
        <Col md={6}>
        <div className="div2">
        <h1 style={{ color: "white" }}>Get In Touch</h1>
                    <div className="bg">
                        <div class="card-body bg">
                            <form onSubmit={onFormSubmit}>
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
                                    <button className="btn btn-success" type="submit">Send Message</button>
                                </div>
                              
                            </form>
                          
                            
                        </div>
                    </div>
                    </div>
        </Col> 
        </Row> 
        </div>
    )
}
