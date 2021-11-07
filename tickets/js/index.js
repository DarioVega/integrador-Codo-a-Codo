let resumen = document.querySelector("#resumen"); //tomo el btn resumen
let total = document.querySelector("#total"); //tomo el span donde voy agregar el total

const mostrar = () => {
  let tipo = document.querySelector("#validationTooltip04").value; //tomo el select
  let cantidadEntradas = document.querySelector("#cantidad").value; //tomo el input de cantidad

  if (tipo === "estudiante") {
    let contenido = cantidadEntradas * 200 * 0.2;
    let precio = document.createTextNode(contenido);
    total.appendChild(precio);
  }
  if (tipo === "trainee") {
    let contenido = cantidadEntradas * 200 * 0.5;
    let precio = document.createTextNode(contenido);
    total.appendChild(precio);
  }
  if (tipo === "junior") {
    let contenido = cantidadEntradas * 200 * 0.85;
    let precio = document.createTextNode(contenido);
    total.appendChild(precio);
  }
};

resumen.addEventListener("click", mostrar);
