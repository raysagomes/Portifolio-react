import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Header() {
    return(
      <>
<Navbar className="header-topo " data-bs-theme="dark">
        <Container className="">
        <Navbar.Brand href="/" className=""></Navbar.Brand>
          <div className=""> 
          <Link to="/" className="text-decoration-none texto-link"> 
          <Button className="Button-header " type="submit">Início</Button>
          </Link>
          <Link to="/Sobre-mim" className="text-decoration-none texto-link"> 
          <Button className="Button-header " type="submit">Sobre mim</Button>
          </Link>
          <Link to="/Contato" className="text-decoration-none texto-link"> 
          <Button className="Button-header " type="submit">Contato</Button>
          </Link>
          </div>
          </Container>
      </Navbar>

</>
    );
}

export default Header;
