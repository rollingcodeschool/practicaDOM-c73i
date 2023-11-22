// const botonCambiarTitulo = document.getElementsByTagName('button');
// const botonCambiarTitulo = document.getElementsByClassName('btn');
// const botonCambiarTitulo = document.getElementById('btnCambiarTitulo');
const botonCambiarTitulo = document.querySelector("#btnCambiarTitulo");
const formularioBusqueda = document.querySelector('form');
console.log(formularioBusqueda);

function cambiarTitulo() {
  console.log("estoy en cambiar el titulo");
  //selecciono el titulo
  const tituloPrincipal = document.querySelector("h1");
  //modifico ese titulo
  tituloPrincipal.innerHTML = "Titulo <b> nuevo </b>";
  // tituloPrincipal.innerText = 'Titulo nuevo';
  console.log(tituloPrincipal.innerText);
  tituloPrincipal.className = "display-1 tituloPrincipal";
}

const verMas = () => {
  const seccionDatos = document.querySelector("#seccionDatos");
  const btnVerMas = document.getElementsByClassName("btn");
  if (btnVerMas[2].innerHTML === "Ver mas...") {
    console.log("Desde la funcion ver mas");
    // OPCION 1:
    //creo un nodo nuevo
    const parrafoNuevo = document.createElement("p");
    console.log(parrafoNuevo);
    // preparar el nodo
    parrafoNuevo.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut cum a numquam ut nisi dolor hic! Explicabo quasi porro numquam ex enim, maiores soluta perferendis, at recusandae veritatis ab!`;
    parrafoNuevo.className = "lead";
    //insertar el nodo en el DOM
    // seccionDatos.appendChild(parrafoNuevo); //agrega un nodo hijo al final
    // seccionDatos.prepend(parrafoNuevo); //agrega un nodo hijo al principio
    // seccionDatos.prepend(parrafoNuevo); //agrega un nodo hijo al principio
    console.log(btnVerMas[2]);
    seccionDatos.insertBefore(parrafoNuevo, btnVerMas[2]);

    //modificar el boton
    btnVerMas[2].innerHTML = "Ocultar";
    btnVerMas[2].className = "btn btn-danger";
  } else {
    console.log(seccionDatos.children[2]);
    seccionDatos.removeChild(seccionDatos.children[2]);
    btnVerMas[2].innerHTML = "Ver mas...";
    btnVerMas[2].className = "btn btn-outline-primary";
  }
};

const buscarTexto = (e)=>{
    e.preventDefault();
    console.log(e);
    console.log('estoy en la funcion buscar texto 😎');
    const inputBusqueda = document.querySelector('input');
    console.log(inputBusqueda.value);
    formularioBusqueda.reset();
}

//agregamos un evento el cúal llama a una funcion

botonCambiarTitulo.addEventListener("click", cambiarTitulo);
// si tengo que llamar a una funcion con parametro la guardo en una funcion anonima
// formularioBusqueda.addEventListener('submit', ()=>{buscarTexto('asdasda')})
formularioBusqueda.addEventListener('submit', buscarTexto);