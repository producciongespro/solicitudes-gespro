function obtenerItem (array, id ) {
    id=parseInt(id);
    var tmpItem=null;
    
    //console.log("*********Filtro por criterio llave", llave);    
    //console.log("******Valor de la llave", valor );    
    //console.log("aaray recibido para filtrar", array);         
    
    if (array.length > 0) {
        const limite = array.length;        
        for (let index = 0; index < limite; index++) { 
            
            if ( parseInt(array[index].id ) === id  ) {
                tmpItem=  array[index];
            }   
        }                 
    }
    //console.log("Arreglo retornado", tmpData);    
    return tmpItem;
}

export default obtenerItem;