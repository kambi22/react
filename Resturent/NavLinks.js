import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { faUser, faHome, faMagnifyingGlass, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import "./Navlink.css"
import { useEffect, useState } from 'react';
import { createSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import Sidebar from './Sidebar';
import Profile from './Profile';
import { Card } from 'react-bootstrap';
function NavLinks() {
  const [showsearch, setshowsearch] = useState(false);
  const [Toggle, setToggle] = useState(false);



  const navigate = useNavigate();
  const Smallscreen = useMediaQuery({ maxWidth: 1200 });

  const SearchValue = (value) => {

    navigate({
      pathname: '/search',
      search: `?${createSearchParams({ name: value })}`
    })






  }
  const heandlesearch = () => {
    setshowsearch(!showsearch);
  };


  let login = localStorage.getItem('email')




  return (

    <div >

      <Navbar variant='dark' expand="xl" fixed='top' className='navbar'  >
        <Container fluid className=''>
          {!Smallscreen && (
            <Navbar.Brand href="#">Resturent</Navbar.Brand>
          )}


          {!Smallscreen && (
            <Nav className='me-auto'>

              <LinkContainer to="/">
                <Nav.Link ><FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/list">
                <Nav.Link >List</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/create">
                <Nav.Link >Create</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/search">
                <Nav.Link >Search</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/check">
                <Nav.Link >Check</Nav.Link>
              </LinkContainer>


            </Nav>
          )}

          {!showsearch && (
            <>
              <Navbar.Toggle aria-controls='sidebar' />
              <Navbar.Collapse id='sidebar' dimension='width'>
                {Smallscreen && (

                  <Sidebar />
                )}

              </Navbar.Collapse>
            </>
          )
          }

          {Smallscreen && (
            <Navbar.Brand href="#" className='ms-3'>Resturent</Navbar.Brand>
          )}
          {!Smallscreen && (
            <div>
              <i><FontAwesomeIcon style={{ background: 'white' }} className='d-flex position-absolute' icon={faMagnifyingGlass}>dfdfsssdfsdfsdfssdfsadfdfsdfsdsdfsdfsdfd</FontAwesomeIcon></i>
              <Form inline >
                <Form.Control className={!showsearch ? "d-inline-block" : "d-none  ms-auto"} id='search' placeholder='Search' onChange={(e) => SearchValue(e.target.value)} ></Form.Control>
              </Form>
            </div>
          )}




          <>
            <label id='searchicon' className={showsearch ? ' d-none' : ' d-inline-block d-xl-none ms-auto'} onClick={heandlesearch} htmlFor=""><FontAwesomeIcon className='fixed-top ms-auto py-3 px-5' icon={faMagnifyingGlass}></FontAwesomeIcon></label>


            <FontAwesomeIcon id='leftangle' className={showsearch ? "d-inline-block d-xl-none " : "d-none ms-auto"} onClick={() => setshowsearch(!showsearch)} fontSize='25px' color='white' icon={faAngleLeft}></FontAwesomeIcon>

            <Form inline className={showsearch ? "d-inline-block d-xl-none " : "d-none ms-auto"}  >

              <Form.Control type="search" id='smallsearch' className='' onChange={(e) => SearchValue(e.target.value)} placeholder='  Search' />
            </Form>


          </>
          {!showsearch && (
            <Nav>
              {
                !login ?
                  <>
                    <LinkContainer to="/login">
                      <Nav.Link><FontAwesomeIcon icon={faUser} className='fixed-top ms-auto p-3' fontSize="20px" /></Nav.Link></LinkContainer>
                  </>
                  :
                  <>
                    <FontAwesomeIcon icon={faUser} className='fixed-top ms-auto p-3' onClick={() => setToggle(!Toggle)} style={{ color: 'white' }} fontSize="20px"></FontAwesomeIcon>
                    <Nav className={!Toggle ? 'd-none' : 'd-xxl-inline-block '} >
                      <Profile />
                    </Nav>
                  </>
              }
            </Nav>
          )}

        </Container>
      </Navbar>

    </div>
  );
}

export default NavLinks;