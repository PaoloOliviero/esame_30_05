import { Container, Row, Col, Card, Nav } from "react-bootstrap";

const MainSection = () => {
  return (
    <main className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <Col md={9} lg={11} className="mainLinks d-none d-md-flex">
          <Nav className="justify-content-start">
            <Nav.Link href="#">TRENDING</Nav.Link>
            <Nav.Link href="#">PODCAST</Nav.Link>
            <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
            <Nav.Link href="#">NEW RELEASES</Nav.Link>
            <Nav.Link href="#">DISCOVER</Nav.Link>
          </Nav>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={10}>
          <Card className="p-3">
            <Card.Title>Rock Classics</Card.Title>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-3" id="rockSection"></Row>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={10}>
          <Card className="p-3">
            <Card.Title>Pop Culture</Card.Title>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-3" id="popSection"></Row>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={10}>
          <Card className="p-3">
            <Card.Title>#HipHop</Card.Title>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 py-3" id="hipHopSection"></Row>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default MainSection;
