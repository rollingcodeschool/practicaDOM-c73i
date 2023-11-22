// const botonCambiarTitulo = document.getElementsByTagName('button');
// const botonCambiarTitulo = document.getElementsByClassName('btn');
// const botonCambiarTitulo = document.getElementById('btnCambiarTitulo');
const botonCambiarTitulo = document.querySelector('#btnCambiarTitulo');
console.log(botonCambiarTitulo);

function cambiarTitulo(){
    console.log('estoy en cambiar el titulo');
    //selecciono el titulo
    const tituloPrincipal = document.querySelector('h1');
    //modifico ese titulo
    tituloPrincipal.innerHTML = 'Titulo <b> nuevo </b>';
    // tituloPrincipal.innerText = 'Titulo nuevo';
    console.log(tituloPrincipal.innerText)
    tituloPrincipal.className = 'display-1 tituloPrincipal'
}

const verMas = () =>{
    console.log('Desde la funcion ver mas');
    // OPCION 1:
    //creo un nodo nuevo
    const parrafoNuevo = document.createElement('p');
    console.log(parrafoNuevo);
    // preparar el nodo
    parrafoNuevo.innerHTML = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut cum a numquam ut nisi dolor hic! Explicabo quasi porro numquam ex enim, maiores soluta perferendis, at recusandae veritatis ab!`;
    parrafoNuevo.className = 'lead';
    //insertar el nodo en el DOM
    const seccionDatos = document.querySelector('#seccionDatos');
    // seccionDatos.appendChild(parrafoNuevo); //agrega un nodo hijo al final
    // seccionDatos.prepend(parrafoNuevo); //agrega un nodo hijo al principio
    // seccionDatos.prepend(parrafoNuevo); //agrega un nodo hijo al principio
    const btnVerMas = document.getElementsByClassName('btn');
    console.log(btnVerMas[2]);
    seccionDatos.insertBefore(parrafoNuevo, btnVerMas[2]);
}


//agregamos un evento el cúal llama a una funcion

botonCambiarTitulo.addEventListener('click', cambiarTitulo )