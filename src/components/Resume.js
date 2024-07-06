import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

export const Resume = () => {
    return (

        <Row>
            <Col md={12}>
                <div className="text-center">
                    <h1 className="summary">Resume</h1>
                </div>
            </Col>
            <Col md={6} className="">
                <h3 className="qualification_text1">Projects</h3>
                <div className="resume-item qualification">
                    <h4 className="qualification_text">Employee Management System</h4>
                    <p className="qualification_text"><li><em>Ceipal Work Force is a cloud-based Employee management system
                        that provides a comprehensive suite of HR and employee management
                        tools</em></li></p>
                    <p className="qualification_text"><li><em>Employee engagement. The platform offers features such as
                        new onboarding employee management, Integrated with
                        accounting tools and finance</em></li></p>

                    <p className="qualification_text"><li><em>I-9 Compliance.Verified employee identity and employment
                        authorization per USCIS regulations, ensuring accurate
                        documentation and reducing compliance risks.</em></li></p>

                </div>
                <div className="resume-item qualification" id="linera">
                    <h4 className="qualification_text">Ticket Management System</h4>
                    <p className="qualification_text"><li><em>The Ticket Management System (TMS) centralizes issue
                        tracking, prioritization, and resolution across calls, emails,
                        chatbots, and social media, ensuring timely responses,
                        enhanced productivity, and improved customer satisfaction.</em></li></p>



                </div>
                <h3 className="qualification_text1">Educational Qualifications</h3>
                <div className="resume-item qualification" >
                    <h4 className="qualification_text">Master Of Computer Application</h4>
                    <h5 className="qualification_text">2017-2021</h5>
                    <p className="qualification_text"><li><em>Sree Chaitanya College of Engg,Karimnagar</em></li></p>

                </div>

                {/* <div className="resume-item qualification" id="linera">
                    <h4 className="qualification_text">Bachelor Of Science(Bsc.Mpcs))</h4>
                    <h5 className="qualification_text">2014-2017</h5>
                    <p className="qualification_text"><li><em>Kims Degree and Pg College.</em></li></p>
                </div> */}
            </Col>
            <Col md={6} className="">
                <h3 className="qualification_text1">Working Experience</h3>
                <div className="resume-item qualification" >
                    <h4 className="qualification_text">Ceipal Software Pvt Ltd.</h4>
                    <h5 className="qualification_text"><li>Front-end Developer(React.js)</li></h5>
                    <h6 className="qualification_text">July-2022 To Nov-2023</h6>
                    <p className="qualification_text"><li><em>Collaborated on integrating Axios to handle HTTP POST and
                        GET requests, facilitating the fetching and posting of employee
                        data to and from REST full APIs</em></li></p>
                    <p className="qualification_text"><li><em>Created reusable components and libraries for scalability.</em></li></p>
                    <p className="qualification_text"><li><em>Implemented efficient application state management using the use
                        Context hook for seamless data handling and communication across
                        components</em></li></p>
                    <p className="qualification_text"><li><em>Debugged and resolved front-end issues</em></li></p>
                    <p className="qualification_text"><li><em>Excellent Problem Solving and Debugging skills</em></li></p>
                </div>

                <div className="resume-item qualification" id="linera">
                    <h4 className="qualification_text">Deepija Telecom Private Limited</h4>
                    <h5 className="qualification_text">Front-end Developer(React.js)</h5>
                    <h5 className="qualification_text">Jan-2024 To Apr-2024</h5>
                    <p className="qualification_text"><li><em>As a Front End Developer for TMS, I created intuitive user
                        interfaces with React.js, collaborated with backend teams for
                        seamless integration, and focused on enhancing usabilit</em></li></p>
                </div>
            </Col>
        </Row>
    )
}