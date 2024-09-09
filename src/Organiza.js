import React from "react";
import { Link } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import { Helmet } from "react-helmet-async";

export default function Organiza() {
    return (
        <>
            <Helmet>
                <title>Organiza</title>
            </Helmet>
            <div className="body">
                <Header />
                <a href="https://organiza.vercel.app/" className="href" style={{ textDecoration: 'none' }}>
                    <p className="link">Link do Website</p>
                </a>

                <h2 className="h3-projeto1 text-center fontcolorwhite">Organizza</h2>
                <p className="paragrafo-pj text-center fontcolorwhite">
                    O organizza é uma plataforma criada em Next.js e React.js, com acesso ao Firebase, criada com o intuito de auxiliar no gerenciamento de finanças. Criado para o tema claro.
                </p>

                <h2 className="h3-projeto1 text-center fontcolorwhite">Fotos do Projeto</h2>

                <div className="container text-center grid">
                    <div className="row linha">
                        <div className="col-12 col-md-6 coluna">
                            <img className="fotos-projetos img-fluid" src="/organiza/cadastro-organiz.png" alt="print do website" />
                            <p className="nome-da-foto fontcolorwhite">Cadastro</p>
                        </div>
                        <div className="col-12 col-md-6 coluna">
                            <img className="fotos-projetos img-fluid" src="/organiza/Inicio.png" alt="print do website" />
                            <p className="nome-da-foto fontcolorwhite">Inicio</p>
                        </div>
                        <div className="col-12 col-md-6 coluna">
                            <img className="fotos-projetos img-fluid" src="/organiza/inicio2.png" alt="print do website" />
                            <p className="nome-da-foto fontcolorwhite">Inicio</p>
                        </div>
                        <div className="col-12 col-md-6 coluna">
                            <img className="fotos-projetos img-fluid" src="/organiza/carteira.png" alt="print do website" />
                            <p className="nome-da-foto fontcolorwhite">Carteira</p>
                        </div>
                        <div className="col-12 col-md-6 coluna">
                            <img className="fotos-projetos img-fluid" src="/organiza/carteira2.png" alt="print do website" />
                            <p className="nome-da-foto fontcolorwhite">Gráfico da Carteira</p>
                        </div>
                        <div className="col-12 col-md-6 coluna">
                            <img className="fotos-projetos img-fluid" src="/organiza/investimento.png" alt="print do website" />
                            <p className="nome-da-foto fontcolorwhite">Investimento</p>
                        </div>
                        <div className="col-12 col-md-6 coluna">
                            <img className="fotos-projetos img-fluid" src="/organiza/investimento2.png" alt="print do website" />
                            <p className="nome-da-foto fontcolorwhite">Investimento</p>
                        </div>
                    </div>

                    <h2 class="h3-projeto fontcolorwhite">
                        Testes
                    </h2>

                    <div className="container text-center grid container-testes">
                        <div className="row linha">
                            <div className="col-12 col-md-6 coluna">
                                <img className="fotos-projetos img-fluid" src="/organiza/cadastro-teste.png" alt="cadastro-organiza" />
                                <p className="nome-da-foto fontcolorwhite">Cadastro com validações</p>
                            </div>
                            <div className="col-12 col-md-6 coluna">
                                <img className="fotos-projetos img-fluid" src="/organiza/carteira-teste.png" alt="Carteira" />
                                <p className="nome-da-foto fontcolorwhite">Carteira Teste</p>
                            </div>
                            <div className="col-12 col-md-6 coluna">
                                <img className="fotos-projetos img-fluid" src="/organiza/carteira-teste2.png" alt="Carteira" />
                                <p className="nome-da-foto fontcolorwhite">Carteira Teste</p>
                            </div>
                            <div className="col-12 col-md-6 coluna">
                                <img className="fotos-projetos img-fluid" src="/organiza/carteira-teste3.png" alt="Carteira" />
                                <p className="nome-da-foto fontcolorwhite">Carteira Teste</p>
                            </div>
                            <div className="col-12 col-md-6 coluna">
                                <img className="fotos-projetos img-fluid" src="/organiza/investimento-teste.png" alt="Investimento" />
                                <p className="nome-da-foto fontcolorwhite">Investimento Teste</p>
                            </div>
                            <div className="col-12 col-md-6 coluna">
                                <img className="fotos-projetos img-fluid" src="/organiza/investimento-teste2.png" alt="Investimento" />
                                <p className="nome-da-foto fontcolorwhite">Investimento Teste</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-contact card margin-bottom-">
                        <div className="card-header text-center">
                            Link do projeto no GitHub!
                        </div>
                        <ul className="list-group list-group-flush text-center">
                            <li className="list-group-item">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-github"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                </svg>
                                <a
                                    href="https://github.com/raysagomes/organiza"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ms-2"
                                >
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
}
