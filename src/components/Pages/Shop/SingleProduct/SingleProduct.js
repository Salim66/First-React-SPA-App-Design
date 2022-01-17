import React, { useState, useEffect } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';

const SingleProduct = () => {

    let { productId } = useParams();

    const [single, setSingle] = useState([]);
    const [related, setRelated] = useState([]);


    useEffect(() => {
        
        fetch('http://localhost:5050/products/' + productId)
        .then(data => data.json())
        .then(data => {
            
            setSingle(data)
            
     
            fetch('http://localhost:5050/category/'+single.categoryId+'/products')
            .then(data => data.json())
            .then(data => setRelated(data));

            
        });

    }, [])

    return (
        <>
            <section className="single-product">
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={ single.image } alt="" />
                        </Col>
                        <Col md={6}>
                            <div className="product-info">
                                <h2 className='name'>{ single.name }</h2>
                                <div className='pricing'><span class="regular">${ single.price }</span><span class="sale">${ single.sell_price }</span></div>
                                <p className="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, doloremque illo repudiandae eius optio fuga amet earum alias accusantium ipsam, eaque accusamus nemo beatae corrupti est magni voluptatum dignissimos enim!</p>
                                <h3>10 In Stock</h3>
                                <Button>Add to card</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section-title center related">
                <Container>
                    <Row>
                        <Col><h2>Related Product</h2></Col>
                    </Row>
                    <Row>

                        {
                            related.map(data => 
                                <Col md={3}>
                                    <div className="product-item">
                                        <a href="#">
                                            <Card>
                                                <Card.Img style={{ height: '250px', objectFit: 'cover' }} src={ data.image }></Card.Img>
                                                <Card.Body>
                                                    <Card.Title className='name'>{ data.name }</Card.Title>
                                                    <Card.Text><span className='regular'>$300</span><span className='sale'>$120</span></Card.Text>
                                                    <Button>Add to card</Button>
                                                </Card.Body>
                                            </Card>                                        
                                        </a>
                                    </div>
                                </Col>
                            )
                        }

                       
                      
                    </Row>
                </Container>
            </section>
        </>
        
    )
};

export default SingleProduct;
