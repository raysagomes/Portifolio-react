import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function Projetos() {
    return (
        <>
        <Helmet>
        <title>Projetos</title>
      </Helmet>
            <div className="body">
                <Header />
                <div className="container text-center grid">
    <div className="row linha">
        <div className="col-12 col-md-6 coluna"> 
            <Link to="/Organiza" className="text-decoration-none texto-link links"> 
                <img className="fotos-projetos" src="organizza.png" alt="print do website" />
                <h3 className="fontcolorwhite"> Organizza </h3> 
            </Link>
        </div>
        <div className="col-12 col-md-6 coluna"> 
            <Link to="/BS" className="text-decoration-none texto-link links"> 
                <img className="fotos-projetos" src="bee-student1.png" alt="print do website" />
                <h3 className="fontcolorwhite"> Bee Student </h3> 
            </Link>
        </div>
    </div>
</div>


                <div className="card-contact-projeto card">
                    <div className="card-header text-center">
                        Para ver mais projetos, por favor abra o link do github!
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                            </svg>
                            <a href="https://github.com/raysagomes">Github</a>
                        </li>
                    </ul>
                </div>
                <Footer />
            </div>
        </>
    );
}
