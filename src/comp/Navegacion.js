import React from 'react';
import config from '../config.json';
const img = config.assets + "img/";

function Navegacion(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
            <div 
                className="container">                
                    <span onClick={props.handleNavegacion} id="inicio" className="puntero-mano" >
                        <img id="logo" className="img-responsive" src={img + "logo.png"} alt="logo mep"/>                    
                    </span>
                
                <span className="navbar-brand" >Dirección de Recursos Tecnológicos en Educación </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
            </div>
        </nav>
    );
}

export default Navegacion