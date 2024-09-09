import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Helmet } from "react-helmet-async";

export default function Sobremim() {
    return (
        <>
        <Helmet>
                <title>Sobre mim</title>
            </Helmet>
        <div className="body">
    <Header />
    <div className="sobre-mim">
      <h1 className="sobre-mim-h1">Sobre mim</h1>
<p className="p-sobre-mim">
  Olá! Sou Raysa, estudante de Ciência da Computação no 6º período. Meu interesse por programação começou no curso técnico em Redes de Computadores, onde aprendi os conceitos fundamentais de tecnologia.
</p>
<p className="p-sobre-mim">
  Na faculdade, aprofundei meu conhecimento em Java no Back-End e explorei frameworks como Angular, React e Next.js no Front-End, criando interfaces dinâmicas e funcionais e Kotlin e Firebase no desenvolvimento mobile.
</p>
<p className="p-sobre-mim">
  Desde 2022, sou voluntária no programa Engin, ajudando ucranianos a aprimorar o inglês. Também fiz intercâmbio nos EUA, no Alasca, onde aprimorei o inglês e vivi uma nova cultura.
</p>
<p className="p-sobre-mim">
  Ansiosa para colaborar em projetos que unam computação e criatividade. Vamos criar algo incrível juntos!
</p>
    </div>
    <div className="imagem-shaking margin-bottom-">
    <img className="handshake" src="/random.jpg" alt="fotos-random" />
    </div> 
    <Footer />
    </div>
    </>
    )
}