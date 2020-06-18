import React, {useState, useEffect } from 'react';
import Explorador from './Admin-Explorador';
import VisorProyecto from './Admin-VisorProyecto';
import dataset from '../data/dataset.json';
import config from '../config.json';
import obtenerItem from '../modulos/obtenerItem';
const img = config.assets + "img/";


function PanelAdmin(params) {
    const [item, setItem]= useState(null);

    useEffect(()=>{
            console.log("item", item);            
    },[item])

    const handleCargarProyecto=(e)=> {
        console.log(parseInt(e.target.id));
        setItem( obtenerItem(dataset, e.target.id)  );
    }


    return (
    <React.Fragment>
            <div className="row mt-1">
                <div className="col-sm-2">
                    <Explorador array={dataset} handleCargarProyecto={handleCargarProyecto} />
                </div>                
                <div className="col-sm-10">
                    <VisorProyecto item={item} />
                </div>                
            </div>
    </React.Fragment>
    );
    
}

export default PanelAdmin