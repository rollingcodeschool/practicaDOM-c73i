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
}


//agregamos un evento el cúal llama a una funcion

botonCambiarTitulo.addEventListener('click', cambiarTitulo )