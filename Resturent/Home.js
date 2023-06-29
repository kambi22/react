import { Card, Row, Col, Container, Carousel } from "react-bootstrap";
import {faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Toast } from "react-bootstrap";
import wine from './images/wine.jpg'
import chrries from './images/cherries.jpg'
import chrries2 from './images/croissant.jpg'
import chrries3 from './images/hamburger.jpg'
import chrries4 from './images/popsicle.jpg'
import chrries5 from './images/salmon.jpg'
import chrries6 from './images/sandwich.jpg'
import chrries7 from './images/tablesetting.jpg'
import gudu from "./images/gudu.mp4"
import gudu2 from "./images/gudu2.mp4"
import { useState } from "react";
import Login from "./Login";
import Create from "./Create";
import Footer from "./Footer";



function Home() {
    
    return (
        <div className=" ">
              
        
      
       <div className="mt-3"><h1 >Resturents</h1>
      
       <Container className="containere mb-4 " style={{height:'300px'}}>
       
                <Carousel  >
                    <Carousel.Item>
                        <img src={chrries3} alt="First slide" className="d-block w-100  rounded-3  carouselimg" style={{height:'300px'}}  />
                     <Carousel.Caption className="text-dark"><h3>Fresh Testy Burger For Just in $5</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={chrries2} alt="First slide" className="d-block w-100 rounded-3 carouselimg  " style={{height:'300px'}}/>
                        <Carousel.Caption ><h3>Best Cheeschili For Just in $10</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={chrries7} alt="First slide" className="d-block w-100 rounded-3 carouselimg" style={{height:'300px'}}  />
                        <Carousel.Caption className="text-dark-50"><h3>Rice Full Plate For Just in $15</h3></Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
                
       </Container>
      
            <Container fluid className="mt-3">
                
                <Row xs={1} md={2} lg={3} xl={4} className='row'>
                    <Col className="mb-4" >
                        <Card  className='card h-100 ' bg="light" variant='light' >
                            <Card.Img src={wine} className='imageas'  variant="top"/>

                            <Card.Body >
                                <Card.Title>Hungry Point</Card.Title>
                                Hungry Point Amritsar
                                Road Kot Ise khan..
                                <Card.Link className="card-link"><a href="">Read more</a></Card.Link>
                            </Card.Body>
                           
                        </Card>
                    </Col>
                    <Col className="mb-4" >
                        <Card className='card h-100 ' bg="light" variant='light'>
                        <Card.Img src={chrries5} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Pizza Hut</Card.Title>
                                Pizza Hut Zira
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" >
                        <Card className='card h-100' bg="light" variant='light' >
                        <Card.Img src={chrries2} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Tharty Mills</Card.Title>
                                Tharty Mills Amritsar
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" >
                        <Card className='card h-100' bg="light" variant='light'>
                        <Card.Img src={chrries3} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Burger Lover</Card.Title>
                                Burger Lover Amritsar
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                
                    <Col  className="mb-4">
                        <Card className='card h-100' bg="light" variant='light' >
                        <Card.Img src={chrries4} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Mapels</Card.Title>
                                Mapals Zira
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card className='card h-100' bg="light" variant='light' >
                        <Card.Img src={chrries} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Macdonlds</Card.Title>
                                Macdonalds Ludiana
                                Road Moga
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card  className='card h-100' bg="light" variant='light'>
                        <Card.Img src={chrries6} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Zmato</Card.Title>
                                Zmato Amritsar
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card className='card h-100' bg="light" variant='light' >
                        <Card.Img src={chrries7} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Svigy</Card.Title>
                                Svigy Dhusanjh
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                
                    <Col className="mb-4" >
                        <Card  className='card h-100 embed-responsive embed-responsive-16by9' bg="light" variant='light' >
                        <Card.Img src={wine} className='imageas' variant="top"/>
                            <Card.Body >
                                <Card.Title>Burger Mills</Card.Title>
                                Burger Mills Love Bheem nagar
                                Moga
                                
                            </Card.Body>
                           
                        </Card>
                    </Col>
                    <Col className="mb-4" >
                        <Card className='card h-100' bg="light" variant='light'>
                        <Card.Img src={chrries5} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Pizza Hut</Card.Title>
                                Pizza Hut Zira
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" >
                        <Card className='card h-100' bg="light" variant='light' >
                        <Card.Img src={chrries2} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Tharty Mills</Card.Title>
                                Tharty Mills Amritsar
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4" >
                        <Card className='card h-100' bg="light" variant='light'>
                        <Card.Img src={chrries3} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Burger Lover</Card.Title>
                                Burger Lover Amritsar
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                
                    <Col  className="mb-4">
                        <Card className='card h-100' bg="light" variant='light' >
                        <Card.Img src={chrries4} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Mapels</Card.Title>
                                Mapals Zira
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card className='card h-100' bg="light" variant='light' >
                        <Card.Img src={chrries} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Macdonlds</Card.Title>
                                Macdonalds Ludiana
                                Road Moga
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card  className='card h-100' bg="light" variant='light'>
                        <Card.Img src={chrries6} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Zmato</Card.Title>
                                Zmato Amritsar
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="mb-4">
                        <Card className='card h-100' bg="light" variant='light' >
                        <Card.Img src={chrries7} className='imageas' variant="top"/>
                            <Card.Body>
                                <Card.Title>Svigy</Card.Title>
                                Svigy Dhusanjh
                                Road Kot Ise khan
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="">
                <Col className="mb-4" >
                        <Card className="vedio" bg="light" variant='light'>
                            <iframe className="w-20 " src={gudu}></iframe>
                        </Card>
                    </Col>
               
                <Col className="mb-4" >
                        <Card className="vedio" bg="light" variant='light'>
                            <iframe className="w-20 " src={gudu2}></iframe>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </div>  
            <footer>
                <Footer />
            </footer>
            </div>
    )
}
export default Home;