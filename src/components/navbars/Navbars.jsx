import { Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import'./Navbars.css'
import { Link } from 'react-router-dom';
function Navbars() {
  return (
    <Navbar expand="lg" className="bg-body-white" dir="rtl">
      <Container>
        <Navbar.Brand href="/">
          <img src={require('../../assets/image 2.png')} className='w-75' alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ms-auto">
            <Link to="/">الرئيسية</Link>
            <Link to="Backup">السياسة والاحكام وسياسة الارجاع</Link>
            <Link to="About"> من نحن؟</Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="About"> <i className="bi bi-linkedin bg-light rounded-5 p-2 icon-link"></i></Nav.Link>
            <Nav.Link href="About"> <i className="bi bi-instagram   bg-light rounded-5 p-2 icon-link"></i></Nav.Link>
            <Nav.Link href="/"><i className="bi bi-google icon-link  bg-light rounded-5 p-2 "></i></Nav.Link>
            <Nav.Link href="Backup"> <i className="bi bi-twitter icon-link  bg-light rounded-5 p-2 "></i></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
