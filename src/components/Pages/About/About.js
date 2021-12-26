import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <Container>
                <Row>
                    <Col md={6}>
                        <img src="https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2018/09/1200/675/blonde-woman-on-computer-istock.jpg?ve=1&tl=1" alt="" />
                    </Col>
                    <Col md={6}>
                        <h2>About For Business</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium saepe cupiditate ipsa iusto quis deleniti vero ab dolor obcaecati!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium saepe cupiditate ipsa iusto quis deleniti vero ab dolor obcaecati!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium saepe cupiditate ipsa iusto</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default About;
