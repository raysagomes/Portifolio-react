import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Habilidades() {
    return (
        <>
            <div className="body">
                <Header />
                <div className="container-habilidades">
                    <div className="row linha">
                        <div className="col-md-6">
                            <h1 className="h1-inicial fontcolorwhite">
                                Bem-vindo à minha página de habilidades! Aqui estão algumas das competências que desenvolvi ao longo da minha carreira:
                            </h1>
                        </div>
                        <div className="col-md-6 coluna-img">
                            <img id="img-habilidade" src="habilidades-bg.png" alt="Habilidades" />
                        </div>
                    </div>
                </div>
                <div className="container-da-habilidade">

                <div className="container2 col-md-8 fontcolorwhite">
                    <h3 className="h1">Habilidades Técnicas</h3>
                    <ul className="lista1 list-group list-group-flush card">
                        <li className="list-group-item">Técnica em Redes de Computadores</li>
                        <li className="list-group-item">Programação: Java nível intermediário</li>
                        <li className="list-group-item">Sistemas Operacionais: Conhecimento em Windows e Linux</li>
                        <li className="list-group-item">Desenvolvimento Web: HTML, JavaScript, CSS, React.js, Node.js, Bootstrap, Next.js, Spring Boot</li>
                        <li className="list-group-item">Desenvolvimento Mobile: Kotlin.</li>
                        <li className="list-group-item">Banco de Dados: SQL, Firebase</li>
                        <li className="list-group-item">Automação com Java e Selenium</li>

                    </ul>
                    <br />
                    <h3 className="h1">Habilidades em Redes de Computadores</h3>
                    <br />
                    <ul className="lista1 list-group list-group-flush">
                        <li className="list-group-item">Configuração e manutenção de equipamentos de rede.</li>
                        <li className="list-group-item">Conhecimentos sólidos em protocolos de rede.</li>
                        <li className="list-group-item">Resolução de problemas de rede.</li>
                        <li className="list-group-item">Segurança de rede e proteção contra ameaças.</li>
                    </ul>
                    <br />
                    <h3 className="h1">Cursos</h3>
                    <br />
                    <ul className="lista1 list-group list-group-flush">
                    <li className="list-group-item">Superior em Ciência da Computação em andamento.</li>
                        <li className="list-group-item">Selenium com java.</li>
                        <li className="list-group-item">BPM e BPMN</li>
                        <li className="list-group-item">Técnico em Redes de Computadores</li>
                        <li className="list-group-item">HTML Básico</li>
                        <li className="list-group-item">Inglês Básico e intermediário</li>

                    </ul>
                    <br />
                    <h3 className="h1">Outras Habilidades</h3>
                    <br />
                    <ul className="lista1 list-group list-group-flush">
                        <li className="list-group-item">Inglês Avançado.</li>
                        <li className="list-group-item">Trabalho em equipe e capacidade de enfrentar desafios com entusiasmo.</li>
                        <li className="list-group-item">Aprendizado rápido e adaptabilidade.</li>
                        <li className="list-group-item">Desenvolvimento de soluções eficientes e otimizadas.</li>
                    </ul>
                    <br />
                </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
