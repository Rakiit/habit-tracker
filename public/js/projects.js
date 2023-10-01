// Referencias a elementos del DOM
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close")[0];
// Obtener la referencia a la input, al mensaje de error y a la modal
const input = document.getElementById("projectName");
const errorMessage = document.getElementById("errorMessage");

// Funciones para mostrar y ocultar el modal
function openModal() {
  modal.style.display = "block";
  input.focus();
}

btn.addEventListener("click", openModal);

function showErrorMessage() {
  // Mostrar el mensaje de error si la input está vacía
  if (input.value.trim() === "") {
    errorMessage.classList.remove("input-message-hidden");
  }
}

span.addEventListener("click", closeModal);

document.addEventListener("click", closeModalOutside);

function clearInput() {
  // Limpiar el contenido de la input
  document.getElementById("projectName").value = "";
  // Opcional: ocultar el mensaje de error
  document.getElementById("errorMessage").classList.add("input-message-hidden");
}

// Close modal when clicking on the cross
function closeModal() {
  modal.style.display = "none";
  clearInput();
}

function closeModalOutside(e) {
  if (e.target == modal && !colorPicker.classList.contains("visible")) {
    modal.style.display = "none";
    clearInput();
  }
}

// window.onclick = function (e) {
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Colored dots modal window
const colorCircle = document.getElementById("colorCircle");
const colorPicker = document.getElementById("colorPicker");

colorCircle.addEventListener("click", openColorPicker);
document.addEventListener("click", closeColorPicker);

function openColorPicker(e) {
  e.stopPropagation();
  colorPicker.classList.toggle("visible");
  if (colorPicker.classList.contains("visible")) {
    span.style.pointerEvents = "none";
  }
}

function closeColorPicker() {
  colorPicker.classList.remove("visible");
  if (!colorPicker.classList.contains("visible")) {
    span.style.pointerEvents = "auto";
  }
}

function changeColor(newColor) {
  document.getElementById("colorCircle").style.backgroundColor = newColor;
  closeColorPicker();
}

// Función para validar la entrada
function validateInput() {
  // Ocultar el mensaje de error si hay texto en la input
  if (input.value.trim() !== "") {
    errorMessage.classList.add("input-message-hidden");
  }
}
