import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Grid() {
  return (
    <>
      <Container className="Grid-Inicial" fluid>
        <div className="container">
          <div className="row text-center">
            <div className="col col-card md-auto">
              <Link to="/Projetos" className="text-decoration-none texto-link links"> 
                <Image 
                  src="../projeto.jpg" 
                  className="imagem-grid" 
                />
                <h4>Projetos</h4>
              </Link>
            </div>

            <div className="col col-card md-auto">
              <a href="../CurriculoRaysa.pdf" target="_blank" rel="noopener noreferrer" className="sem-decoracao">
                <Image 
                  src="../curriculo.png" 
                  className="imagem-grid" 
                />
                <h4>Currículo</h4>
              </a>
            </div>

            <div className="col col-card md-auto">
              <Link to="/Habilidades" className="text-decoration-none texto-link links"> 
                <Image 
                  src="../habilidades-topico.png" 
                  className="imagem-grid" 
                />
                <h4>Habilidades</h4>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
