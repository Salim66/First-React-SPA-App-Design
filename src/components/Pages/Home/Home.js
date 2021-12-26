import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Home.css';

const Home = () => {
    return (
        <>
            <section className="sliders">
                <Carousel>
                    <Carousel.Item>
                        <img src="https://i.guim.co.uk/img/media/f25346d1a1f1ef22c622f36317b4f402cbb97009/0_107_5616_3370/master/5616.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=cb5fe16583a719cdd2103e7e50bf1fee" alt="" />
                        <Carousel.Caption>
                            <h2>React For Love</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis optio ab delectus in, iure dicta.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="http://blog.shecluded.com/wp-content/uploads/2021/06/african-american-woman-with-laptop-coffee_1303-7296.jpg" alt="" />
                        <Carousel.Caption>
                            <h2>React For Love</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis optio ab delectus in, iure dicta.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="https://i2-prod.mirror.co.uk/incoming/article12432571.ece/ALTERNATES/n615/3_young-woman-got-bad-news-with-her-smart-phone.jpg" alt="" />
                        <Carousel.Caption>
                            <h2>React For Love</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis optio ab delectus in, iure dicta.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6041579d3f27a0cd194da4d4%2F0x0.jpg" alt="" />
                        <Carousel.Caption>
                            <h2>React For Love</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis optio ab delectus in, iure dicta.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className="services">
                <Container>
                    <Row>
                        <Col>
                            <div className="section-title">
                                    <h2>Our Services</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quisquam?</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png" alt="" />
                            <h3>WordPress</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quibusdam.</p>
                        </Col>
                        <Col md={4}>
                            <img src="https://www.pngfind.com/pngs/m/146-1466902_php-logo-png-transparent-php-logo-png-png.png" alt="" />
                            <h3>PHP</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quibusdam.</p>
                        </Col>
                        <Col md={4}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ECZLWOhTJ93rL5L3IP6bG-sA1pKyYbPv1g&usqp=CAU" alt="" />
                            <h3>JavaScript</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, quibusdam.</p>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
};

export default Home;
