// Selecciona el elemento HTML con el id "nav" y guárdalo en la variable "nav"
const nav = document.querySelector("#nav");

// Selecciona el elemento HTML con el id "abrir" y guárdalo en la variable "abrir"
const abrir = document.querySelector("#abrir");

// Selecciona el elemento HTML con el id "cerrar" y guárdalo en la variable "cerrar"
const cerrar = document.querySelector("#cerrar");

// Agrega un "escuchador de eventos" al elemento con id "abrir" para el evento "click"
abrir.addEventListener("click", () => {
  // Cuando se hace clic en el elemento con id "abrir"...

  // Agrega la clase "visible" al elemento con id "nav"
  // Esto se utiliza para mostrar un elemento oculto en la página
  nav.classList.add("visible");
});

// Agrega un "escuchador de eventos" al elemento con id "cerrar" para el evento "click"
cerrar.addEventListener("click", () => {
  // Cuando se hace clic en el elemento con id "cerrar"...

  // Elimina la clase "visible" del elemento con id "nav"
  // Esto se utiliza para ocultar el elemento nuevamente
  nav.classList.remove("visible");
});