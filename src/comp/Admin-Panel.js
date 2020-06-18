import React from 'react';
import Explorador from './Admin-Explorador';
import VisorProyecto from './Admin-VisorProyecto';
import dataset from '../data/dataset.json';
import config from '../config.json';
const img = config.assets + "img/";


function PanelAdmin(params) {


    return (
    <React.Fragment>
            <div className="row mt-1">
                <div className="col-sm-2">
                    <Explorador array={dataset} />
                </div>                
                <div className="col-sm-10">
                    <VisorProyecto array={dataset} />
                </div>                
            </div>
    </React.Fragment>
    );
    
}

export default PanelAdmin