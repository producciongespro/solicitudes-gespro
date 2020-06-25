async function obtener (url) {
  //console.log("url", url);  
  const response = await fetch(url);
  const json = await response.json();
  //console.log("json",json);
  return json;
}


export default obtener;