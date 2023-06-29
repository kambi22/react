import { Button, ButtonGroup, Container, InputGroup, NavbarBrand } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { Navbar, Offcanvas } from "react-bootstrap";
import NavbarOffcanvas from "react-bootstrap/esm/NavbarOffcanvas";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import './Amazon.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faBellConcierge, faLocation, faCartShopping, faHome, faMagnifyingGlass, faUser, faMapLocationDot, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFonticonsFi } from "@fortawesome/free-brands-svg-icons";
import Sidebar from "./Sidebar";
import FullSidebar from "./FullSidebar";

function Headers() {
    const [show, setshow] = useState(false)

    const showhandale = () => {
        setshow(true)
    }
    const closehandale = () => {
        setshow(false)
    }
    return (
        <div className="">
            <Navbar variant='dark' expand="lg" bg='secondary' className="navbar" fixed="top" >
                <Container fluid className="firstcon mb-0 " style={{ height: '50px' }} >
                    <Navbar.Brand className='d-none d-md-inline-block ' id="brand"><strong className="text-white ">amazon</strong ><small className="text-white">.in</small></Navbar.Brand>
                    <Button aria-controls="offcanvasopen" className="d-lg-none me-1 bg-secondary border-0 position-fixed" onClick={showhandale}><FontAwesomeIcon icon={faBars} fontSize="25px" /></Button>
                    <Button aria-activedescendant="" aria-controls="offcanvasopen" className="d-none d-lg-inline-block me-1 bg-secondary border-0 position-fixed" onClick={showhandale}><FontAwesomeIcon icon={faBars} fontSize="25px" />df</Button>
                    <Navbar.Brand className='d-md-none me-auto ms-5 ' id="brand" ><strong className="text-white">amazon</strong ><small className="text-white">.in</small></Navbar.Brand>
                    <NavbarOffcanvas id='offcanvasopen' show={show} onHide={closehandale} placement='start' >
                        <Offcanvas.Header closeButton className="bg-primary text-white" >
                            <Offcanvas.Title >Amazon</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body className=' bg-secondary text-white'>
                            <Nav>
                            <Nav >.
                                <LinkContainer className="d-lg-inline  d-none" to="/">
                                    <Nav.Link ><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                                </LinkContainer >
                                <LinkContainer to='/category' className="d-lg-inline  d-none">
                                    <Nav.Link>Category</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/wishlist' className="d-lg-inline  d-none">
                                    <Nav.Link>Wishlist</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/deals' className="d-lg-inline  d-none">
                                    <Nav.Link>Deals</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/location' className="d-lg-inline  d-none">
                                    <Nav.Link><FontAwesomeIcon icon={faLocationDot}/> Your Location</Nav.Link>
                                </LinkContainer>
                              
                            </Nav>
                                <Nav>
                                    <Sidebar/>
                                </Nav>
                            </Nav>

                            



                        </Offcanvas.Body>
                    </NavbarOffcanvas>
                    <Nav className="searchbar">


                        <Form className="w-100 d-none d-lg-inline-block " inline   >
                            <Form.Control name="search" className="search" style={{ height: '30px' }} type="search" placeholder="Search"></Form.Control>
                        </Form>

                    </Nav>
                    <Nav className="ms-3">
                        <div className="icons ">
                        <LinkContainer to='/return&order'>
                                <Nav.Link><FontAwesomeIcon className="ms-2"  />Return & Order</Nav.Link>
                            </LinkContainer>
                        
                            <LinkContainer to='/cart'>
                                <Nav.Link><FontAwesomeIcon className="ms-2" icon={faCartShopping} /></Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link><FontAwesomeIcon className="ms-2" icon={faUser} /></Nav.Link>
                            </LinkContainer>
                            
                        </div>
                    </Nav>

                </Container>

                <Container className=" bg-secondary " style={{ height: '50px' }} fluid >
                    <ButtonGroup className="w-100 " >
                        <Form className="w-100 d-lg-none d-inline-block" inline >
                            <Form.Control name="search" type="search" placeholder="Search"></Form.Control>
                        </Form>
                        <Button className="d-lg-none d-inline-block"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
                    </ButtonGroup>
                </Container>


            </Navbar>
            <Container className=" buttonsearch d-lg-none d-inline-block " fluid >
                <div className="" >
                    <ul className="topsearches w-100">
                        <li><Button variant="dark" className="bg-secondary">All</Button></li>
                        <li><Button variant="dark" className="bg-secondary">Mobile</Button></li>
                        <li><Button variant="dark" className="bg-secondary">Clothes</Button></li>
                        <li><Button variant="dark" className="bg-secondary">Beauty</Button></li>
                        <li><Button variant="dark" className="bg-secondary">Health</Button></li>
                        <li><Button variant="dark" className="bg-secondary">Work</Button></li>
                        <li><Button variant="dark" className="bg-secondary">Kitchen</Button></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}
export default Headers;