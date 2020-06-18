import React from 'react';
import config from '../config.json';
const img = config.assets + "img/";


function PanelAdmin(params) {


    return (
        <React.Fragment>
            <div className="row">
                <div className="col-sm-12">
                    <img src={img + "logo_mep.png"} className="img-fluid" alt="Logo MEP" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 ml-2">
                  <h6>Departamento: GESPRO</h6>
                  <span> Lista de proyectos </span>
                </div>                
            </div>
            <hr/>
            <div className="row">
                <div className="col-sm-12 ml-2">
                  {
                      params.array &&
                      params.array.map((item, i)=>(
                          <p onClick={params.handleCargarProyecto} className="puntero-mano nombre-proyecto" id={item.id}  key={"nombre"+i} >{item.nombre } </p>
                      ))
                  }  
                </div>
            </div>            
        </React.Fragment>
    );

}

export default PanelAdmin