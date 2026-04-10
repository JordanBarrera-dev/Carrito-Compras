//cree en el proceso


const botonAñadir = document.querySelectorAll(".btn-agregar")
const listaItems = document.getElementById("lista-carrito")

botonAñadir.forEach(boton => {
    boton.addEventListener("click", function(e){
    let nombre = e.target.dataset.nombre
    let precio = parseInt(e.target.dataset.precio)
    let añadido = document.createElement("li")
    añadido.textContent = `${nombre} precio ${precio}`
    listaItems.appendChild(añadido)
    })
})
