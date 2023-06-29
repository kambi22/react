import { Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Sidebar() {
    return (
        <div>
            <Container>
                <Nav className="home" >
                    <LinkContainer  to="/" >
                        <Nav.Link   >
                        <FontAwesomeIcon icon={faHome} className="pe-2" />Amazon Home</Nav.Link>
                    </LinkContainer >
                </Nav>
                <hr />
                <Nav>
                    <h5>Treding</h5>
                    <LinkContainer to='/seller'>
                        <Nav.Link>Sell</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/newrelease'>
                        <Nav.Link>Best NewRelease</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/Movers&shakers'>
                        <Nav.Link>Movers and Shakers</Nav.Link>
                    </LinkContainer>

                </Nav>
                <hr />

                <Nav>
                    <h5>Top Categories For You</h5>
                    <LinkContainer to='Mobile'>
                        <Nav.Link>Mobile</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='Computer'>
                        <Nav.Link>Computer</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='Books'>
                        <Nav.Link>Books</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='Feshion'>
                        <Nav.Link>Feshion</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='category'>
                        <Nav.Link>See All Category</Nav.Link>
                    </LinkContainer>
                    <hr></hr>
                </Nav>
                <Nav>
                    <h5>Programs & Deals</h5>
                    <LinkContainer to='todaysdeal'>
                        <Nav.Link>Today s Deals</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='amazonpay'>
                        <Nav.Link>Amazon Pay</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='amazonloundpad'>
                        <Nav.Link>Amazon Lounchpad</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='typrime'>
                        <Nav.Link>Try Prime</Nav.Link>
                    </LinkContainer>

                </Nav>
            </Container>
        </div>
    )
}
export default Sidebar;