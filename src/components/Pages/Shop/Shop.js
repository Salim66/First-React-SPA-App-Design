import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ShopSidebar from '../../Sidebar/ShopSidebar/ShopSidebar';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        
        fetch('http://localhost:5050/products')
        .then(data => data.json())
        .then(data => setProducts(data));

    }, [])


    return (
        <section className="shop">
            <Container>
                <Row>
                    <Col>
                        <div className="section-title center">
                            <h2>Shop Page</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        
                        <ShopSidebar></ShopSidebar>

                    </Col>
                    <Col md={9}>
                        <Row>

                            {
                                products.map(data => 
                                    
                                    <Col md={4}>
                                        <div className="product-item">
                                            <Link to={data.id}>
                                                <Card>
                                                    <Card.Img style={{ height: '250px', objectFit: 'cover' }} src={ data.image }></Card.Img>
                                                    <Card.Body>
                                                        <Card.Title className='name'>{ data.name }</Card.Title>
                                                        <Card.Text>
                                                            {
                                                                data.sell_price == "" ?
                                                                    <span className='sale'>${ data.price }</span>
                                                                : 
                                                                <>
                                                                    <span className='regular'>${ data.price }</span>
                                                                    <span className='sale'>${ data.sell_price }</span>
                                                                </>
                                                            }
                                                            
                                                        </Card.Text>
                                                        <Button>Add to card</Button>
                                                    </Card.Body>
                                                </Card>                                        
                                            </Link>
                                        </div>
                                    </Col>

                                )
                            }

                            
                            
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default Shop;
