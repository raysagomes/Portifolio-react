import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <Container className="footer1 container-fluid" fluid>
            <p className="fontcolorwhite">© 2024</p>
                <nav className="nav1 nav">
                <Link to="/" className="text-decoration-none texto-link nav-link"> 
                Início
                    </Link>
                    <Link to="/Sobre-mim" className="text-decoration-none texto-link nav-link"> 
                    Sobre mim
                    </Link>
                    <Link to="/contato" className="text-decoration-none texto-link nav-link"> 
                    Contato
                                </Link>
                </nav>
            </Container>

        </>
    );
}

export default Footer;
