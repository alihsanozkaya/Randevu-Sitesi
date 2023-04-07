import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <div>
         <Navbar bg="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" style={{color: "white"}}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color: "white"}}/>
        <Navbar.Collapse id="basic-navbar-nav" style={{color: "white"}}>
          <Nav className="me-auto" style={{color: "white"}}>
            <Nav.Link className='text-white' href="/">Anasayfa</Nav.Link>
            <Nav.Link className='text-white' href="/hakkimizda">Hakkımızda</Nav.Link>
            <NavDropdown className='text-white' title="Randevu al" id="basic-nav-dropdown">
              <NavDropdown.Item href="/randevu/avukat">Avukat randevu</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/randevu/hastane">Hastane randevu</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/randevu/kuafor">Kuaför randevu</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider />
            <Nav.Link className='text-white' href="/randevularim">Randevularım</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default Header