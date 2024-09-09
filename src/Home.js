import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Image from 'react-bootstrap/Image';
import Footer from "./components/footer";
import { Container, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Grid from "./components/grid";
import { HelmetProvider, Helmet } from 'react-helmet-async';

function Home() {
    return (
        <>
             <Helmet>
        <title>ínicio</title>
      </Helmet>
            <div className="body">
                <Header />
                    <>
                        <Container className="texto-inicial">
                            <Row className="align-items-center">
                                <Col xs={12} md={6}>
                                    <Image
                                        src="../minha-foto.png"
                                        className="imagem"
                                        roundedCircle
                                        fluid
                                    />
                                </Col>
                                <Col xs={12} md={6}>
                                    <div className="legenda">
                                        <h1 id="h1-slide"> Welcome, </h1>
                                        <h2 id="h2-slide">
                                            Eu sou Raysa, estudante de Ciências da Computação. Fascinada por soluções criativas e inovadoras.
                                        </h2>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                        <Grid />
                        <Footer />
                    </>
            </div>
        </>
    );
}

export default Home;
