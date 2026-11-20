const btnMenu = document.querySelector("#btnMenu");
const menuNav = document.querySelector("#menuNav");
const formContacto = document.querySelector("#formContacto");
const estadoEnvio = document.querySelector("#estadoEnvio");

btnMenu.addEventListener("click", () => {
  menuNav.classList.toggle("activo");
});

formContacto.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombreInput = document.querySelector("#nombre");
  const nombreLimpio = nombreInput.value.trim();

  if (!nombreLimpio) {
    estadoEnvio.textContent = "Por favor escribe tu nombre antes de enviar.";
    return;
  }

  estadoEnvio.textContent = `Listo, ${nombreLimpio}: tu consulta quedó registrada en esta vista de muestra.`;
  formContacto.reset();
});