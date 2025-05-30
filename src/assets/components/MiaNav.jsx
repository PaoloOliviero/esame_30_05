import { Button, Container, FormControl, InputGroup, Nav, Navbar } from "react-bootstrap";
import { BsBookFill, BsHouseDoorFill } from "react-icons/bs";

const MiaNav = () => {
  return (
    <>
      <aside className="col col-2">
        <Navbar expand="md" fixed="left" className="flex-column justify-content-between" id="sidebar">
          <Container className="flex-column align-items-start">
            <Navbar.Brand href="index.html">
              <img src="src\assets\logo.png" alt="Spotify Logo" width="131" height="40" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
            <Navbar.Collapse id="navbarNavAltMarkup">
              <Nav className="flex-column">
                <Nav.Link href="#" className="d-flex align-items-center">
                  <BsHouseDoorFill className="me-2" />
                  Home
                </Nav.Link>
                <Nav.Link href="#" className="d-flex align-items-center">
                  <BsBookFill className="me-2" />
                  Your Library
                </Nav.Link>

                <InputGroup className="mt-3">
                  <FormControl placeholder="Search" aria-label="Search" />
                  <Button variant="outline-secondary" size="sm">
                    GO
                  </Button>
                </InputGroup>
              </Nav>
            </Navbar.Collapse>
          </Container>

          <div className="nav-btn d-flex flex-column align-items-start px-3 pb-3">
            <Button className="login-btn">Sign Up</Button>
            <Button className="login-btn">Login</Button>
            <div>
              <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
            </div>
          </div>
        </Navbar>
      </aside>
      ;
    </>
  );
};

export default MiaNav;
