import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import './Team.css';

const Team = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
       
        setInterval(() => {
            fetch('https://api.github.com/users')
            .then(data => data.json())
            .then(data => setUsers(data));
        }, 3000);

    }, [])

    return (
        <section className="team">
            <Container>
                <Row>
                    <Col>
                        <div className="section-title center">
                            <h2>Our Developers</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, itaque.</p>
                        </div>
                    </Col>
                </Row>
                <Row>

                    {

                        users.length > 0 ?

                        users.map(data => 
                            <Col md={4}>
                                <div className="team-member">
                                    <img src={ data.avatar_url } alt="" />
                                    <h2>{ data.login }</h2>
                                    <h3>{ data.node_id }</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cumque.</p>
                                </div>
                            </Col>
                        )
                        :
                        <>
                            <Col md={4}>
                                <div className="team-member-skeleton">
                                    <Skeleton width='150px' height='150px' circle='true'></Skeleton>
                                    <Skeleton width='200px' height='20px'></Skeleton>
                                    <Skeleton width='180px' height='15px'></Skeleton>
                                    <Skeleton width='100%' height='10px'></Skeleton>
                                    <Skeleton width='70%' height='10px'></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-member-skeleton">
                                    <Skeleton width='150px' height='150px' circle='true'></Skeleton>
                                    <Skeleton width='200px' height='20px'></Skeleton>
                                    <Skeleton width='180px' height='15px'></Skeleton>
                                    <Skeleton width='100%' height='10px'></Skeleton>
                                    <Skeleton width='70%' height='10px'></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-member-skeleton">
                                    <Skeleton width='150px' height='150px' circle='true'></Skeleton>
                                    <Skeleton width='200px' height='20px'></Skeleton>
                                    <Skeleton width='180px' height='15px'></Skeleton>
                                    <Skeleton width='100%' height='10px'></Skeleton>
                                    <Skeleton width='70%' height='10px'></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-member-skeleton">
                                    <Skeleton width='150px' height='150px' circle='true'></Skeleton>
                                    <Skeleton width='200px' height='20px'></Skeleton>
                                    <Skeleton width='180px' height='15px'></Skeleton>
                                    <Skeleton width='100%' height='10px'></Skeleton>
                                    <Skeleton width='70%' height='10px'></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-member-skeleton">
                                    <Skeleton width='150px' height='150px' circle='true'></Skeleton>
                                    <Skeleton width='200px' height='20px'></Skeleton>
                                    <Skeleton width='180px' height='15px'></Skeleton>
                                    <Skeleton width='100%' height='10px'></Skeleton>
                                    <Skeleton width='70%' height='10px'></Skeleton>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="team-member-skeleton">
                                    <Skeleton width='150px' height='150px' circle='true'></Skeleton>
                                    <Skeleton width='200px' height='20px'></Skeleton>
                                    <Skeleton width='180px' height='15px'></Skeleton>
                                    <Skeleton width='100%' height='10px'></Skeleton>
                                    <Skeleton width='70%' height='10px'></Skeleton>
                                </div>
                            </Col>
                        </>
                    }

                    
                
                    
                </Row>
            </Container>
        </section>
    )
};

export default Team;
