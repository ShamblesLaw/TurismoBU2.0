// Seleccionamos los elementos
var contenedor = document.getElementById("contenedor");
var elementos = document.getElementsByClassName("elemento");
var cantidadElementos = elementos.length;
var elementoActivo = 0;

// Función que cambia el elemento activo
function cambiarElemento() {
  // Ocultamos el elemento activo
  elementos[elementoActivo].classList.remove("activo");
  // Aumentamos el índice del elemento activo
  elementoActivo++;
  // Si llegamos al final, volvemos al inicio
  if (elementoActivo >= cantidadElementos) {
    elementoActivo = 0;
  }
  // Mostramos el nuevo elemento activo
  elementos[elementoActivo].classList.add("activo");
}

// Configuramos el intervalo para cambiar de elemento
var intervalo = setInterval(cambiarElemento, 10000);

// Detenemos el intervalo al pasar el mouse por encima
contenedor.addEventListener("mouseover", function() {
  clearInterval(intervalo);
});

// Reanudamos el intervalo al quitar el mouse de encima
contenedor.addEventListener("mouseout", function() {
  intervalo = setInterval(cambiarElemento, 10000);
});