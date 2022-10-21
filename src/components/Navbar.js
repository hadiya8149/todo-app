
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
export default function NavBar(){
    return(
<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">HOme</Nav.Link>
          <Nav.Link href="/pomodoro">Pomodoro clock</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
      }