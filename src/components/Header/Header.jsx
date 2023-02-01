import { Backdrop, CircularProgress } from '@mui/material';
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {

  const [open, setOpen] = React.useState(false);   //added for backdrop

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  return (
    <div>

<Navbar collapseOnSelect expand="lg" variant="dark" style={{ fontSize: "20px", color: "white", background: "#5e10b1" }}>
        <Container className='Containers ' >
          {/* <Navbar.Brand href="/" data-testid="herounit" >BankCredible</Navbar.Brand>
           */}
           <a class="navbar-brand img-fluid" id='nwlogo' href="/"><img src="./assets/nwlogo.png" alt=""/>
                </a>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link href="/" style={{ color: "white" }}>Home</Nav.Link>
              
              <Nav.Link eventKey={2} href="/contactus" style={{ color: "white" }}>Contact Us</Nav.Link>
              <Nav.Link href="/aboutus" style={{ color: "white" }}>About us</Nav.Link>
              <Nav.Link href="/services" style={{ color: "white" }}>Services</Nav.Link>
              <Link className="nav-link active" to="/business" onClick={handleOpen}>Business</Link><Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}

                      >
                        <CircularProgress color="inherit" />
                      </Backdrop>

            
              
              <Nav.Link href="/Login" style={{ color: "white" }}>Login</Nav.Link>
              <Nav.Link href="/signup" style={{ color: "white" }}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}
