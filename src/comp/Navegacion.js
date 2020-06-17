import React from 'react';
import config from '../config.json';
const img = config.assets + "img/";

function Navegacion() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div className="container">
                <a href="index.html"><img id="logo" className="img-responsive" src={img + "logo.png"} /></a>
                <a className="navbar-brand" href="#">Dirección de Recursos Tecnológicos en Educación </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
        </nav>
    );
}

export default Navegacion