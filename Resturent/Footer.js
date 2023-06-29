import { faFacebookF, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Container, Row, Col, NavLink, Form } from "react-bootstrap";

function Footer() {
    
    return (
        <div>
            <Container fluid className="footer pt-5" >
                <Row>
                    <Col>
                        <h5>Contact</h5>
                        <NavLink to='/'>About Us</NavLink>
                        <NavLink to='/list'>Contact</NavLink>
                        <NavLink to='/create'>FAQs</NavLink>
                        <NavLink to='/search'>Products</NavLink>
                        <NavLink to='/check'>Compneise</NavLink>
                        <div className="brandicons" >
                            
                            <i><FontAwesomeIcon color="wheight" icon={faFacebookF} ></FontAwesomeIcon></i>
                            <i><FontAwesomeIcon color="wheight" icon={faInstagram} ></FontAwesomeIcon></i>
                           <i><FontAwesomeIcon color="wheight" icon={faTwitter} ></FontAwesomeIcon></i>
                            <i><FontAwesomeIcon color="wheight" icon={faLinkedin} ></FontAwesomeIcon></i>
                        </div>

                    </Col>
                    <Col className="d-none  d-lg-block">
                        <h5>Rest Pages</h5>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/list'>List</NavLink>
                        <NavLink to='/create'>Create</NavLink>
                        <NavLink to='/search'>Search</NavLink>
                        <NavLink to='/check'>Check</NavLink>
                        <NavLink to='/profile'>Profile</NavLink>
                    </Col>

                    <Col className="d-none  d-sm-block">
                        <h5>Dishes</h5>
                        <NavLink to='/About'>Pizza</NavLink>
                        <NavLink to='/list'>Burger</NavLink>
                        <NavLink to='/create'>Noodles</NavLink>
                        <NavLink to='/search'>paties</NavLink>
                        <NavLink to='/check'>Ice Cream</NavLink>

                    </Col>
                    <Col className="d-none  d-md-block">

                        <h5>Top Searches</h5>
                        <NavLink to='/Burger'>Burger</NavLink>
                        <NavLink to='/Pizza'>Pizza</NavLink>
                        <NavLink to='/Tiki'>Tiki</NavLink>
                        <NavLink to='/Fingers'>Fingers</NavLink>
                        <NavLink to='/Noodles'>Noodles</NavLink>

                    </Col>
                </Row>

            </Container>


        </div>
    )
}
export default Footer;