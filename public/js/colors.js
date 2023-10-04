// colorsModule.js
const coloresDisponibles = ["red", "blue", "green", "light-blue", "noxius"];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * coloresDisponibles.length);
  return coloresDisponibles[randomIndex];
}

module.exports = {
  getRandomColor,
  coloresDisponibles,
};
