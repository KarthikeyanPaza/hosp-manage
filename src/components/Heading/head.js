
import { Navbar, NavbarBrand, Collapse, Nav, NavbarToggler, NavItem, NavLink, Col, Row, Container } from 'reactstrap';

function heading() {
    return (
        <div>
            <Navbar
                color="dark"
                dark
                expand="md"
                className='bg-secondary'
            >
                <Container>
                    <Row>
                        <Col lg="4" className='col-4'>
                            <NavbarBrand
                                className="me-auto"
                                href="/"
                            > <div >Snowflake</div>
                            </NavbarBrand>
                        </Col>
                        <Col lg="8" className='col-8 d-flex justify-content-end'>
                            <NavbarToggler
                                className="me-2"
                                onClick={function noRefCheck() { }}
                            />
                            <Collapse navbar className='justify-content-end'>
                                <Nav
                                    navbar>
                                    <NavItem>
                                        <NavLink href="/">
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#about">
                                            About
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink href="#ourServices">
                                            Our Services
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#Specailist">
                                            Specailist
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#contactUs">
                                            Contact Us
                                        </NavLink>
                                    </NavItem>

                                </Nav>

                            </Collapse>
                        </Col>
                    </Row>
                </Container>
            </Navbar>


        </div>)
}
export default heading;