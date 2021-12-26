import { faFacebook, faFacebookF, faGithub, faLinkedinIn, faNavLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './Header.css';
import logo from '../../images/eshop-logo.jpg';
import { NavLink } from 'react-router-dom';

const Header = ({progress}) => {
    return (
        <>
            <div className="top-header">
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="info">
                                <ul>
                                    <li>01773980593</li>
                                    <li>|</li>
                                    <li>iamsalim@gmail.com</li>
                                </ul>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="social">
                                <ul>
                                    <li><a href="#"><FontAwesomeIcon icon={ faFacebookF }></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faTwitter }></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faLinkedinIn }></FontAwesomeIcon></a></li>
                                    <li><a href="#"><FontAwesomeIcon icon={ faGithub }></FontAwesomeIcon></a></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <header className="header shadow">
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="logo">
                                <a href="#"><img src={ logo } alt="eShop" /></a>
                            </div>
                        </Col>
                        <Col md={9}>
                            <Nav className="menu">
                                <ul>
                                    <li><NavLink onClick={() => progress(100)} to="/">Home</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/about">About Us</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/blog">Blog</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/team">Out Team</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/shop">Shop</NavLink></li>
                                    <li><NavLink onClick={() => progress(100)} to="/contact">Contact Us</NavLink></li>
                                </ul>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    )
};

export default Header;
