import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export const Contact = () => {
    return (
        <Row>
            <Col md={12} >
                <div className="text-center">
                    <h3 className="contactus">Contact Us</h3>
                </div>
            </Col>
            <Col lg={4} md={6} xs={12}>

            

    



                {/* <div className="animation_contact">
                    <div className="card-flex" style={{ width: "" }}>
                        <div>
                        <p><FontAwesomeIcon icon={faPhone} className="phoneicon"/></p>
                       </div>
                        <div className="card-body">
                            <h5 className="card-text"><b>Phone</b></h5>
                            <p className="card-text">8523049607</p>
                        </div>
                    </div>

                    <div className="card-flex mt-3" style={{ width: "" }}>
                        <div>
                        <p><FontAwesomeIcon icon={faPhone} className="phoneicon"/></p>
                       </div>
                        <div className="card-body">
                            <h5 className="card-text"><b>Email</b></h5>
                            <p className="card-text">boorlaravali96@gmail.com</p>
                        </div>
                    </div>

                    <div className="card-flex mt-3" style={{ width: "" }}>
                        <div>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className="phoneicon1"/></p>
                       </div>
                        <div className="card-body">
                            <h5 className="card-text"><b>Address</b></h5>
                            <p className="card-text">Durgam Cheruvu,Hyderabad</p>
                        </div>
                    </div>

                </div> */}
            </Col>
            <Col md={6}>
            
            {/* <div className="card-flex">
  
  <div className="card-body">
    <h4 className="text-white">Get In Touch</h4>
  <form>
  <div className="mb-3">
              <label htmlFor="name" className="form-label text-white">Name:</label>
              <input type="text" className="form-control" id="name" placeholder="Enter Name"/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-white">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter Email"/>
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label text-white">Subject:</label>
              <input type="text" className="form-control" id="subject" placeholder="Enter Subject"/>
            </div>
            <div className="mb-3 text-center">
              <a href="#" className="btn btn-primary">Send Mail</a>
            </div>
          </form>
   
  </div>
</div> */}

            </Col>
        </Row>
    )
}