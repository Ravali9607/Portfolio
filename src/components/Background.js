import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import { Header } from "./Header";
import '../index.css'; // Ensure this path matches your CSS file location

export const Background = () => {
    return (
        <Container fluid className="bgimage">
           
            <Header />
           
            
        </Container>
    );
}
