import React from 'react';

function Radios(props) {


    return (
        <div className="row animate__animated animate__fadeInLeft">
            {
                props.array.map((item, i)=>(
                    <div className="form-check col-sm-6" key={i}>
                        <input 
                            className="form-check-input" 
                            type="radio" 
                            name="productos" 
                            id={"radio"+item.idProductoDiseno} 
                            defaultValue={item.idProductoDiseno} 
                            ref={ props.register({ required: true })}
                            />
                        <label className="form-check-label" htmlFor={"radio"+item.idProductoDiseno}>
                            {item.nombre }
                        </label>
                    </div>
                ))
            }
        </div>        
    )
}

export default Radios;