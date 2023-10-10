const timeDisplay = document.getElementById("timeDisplay");
const startStopBtn = document.getElementById("startStopBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

startStopBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTime = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 1000);
  } else {
    paused = true;
    elapsedTime = Date.now() - startTime;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    timeDisplay.textContent = "00:00:00";

    // Get the selected project
    const selectedProject = getSelectedProject();

    // Send a POST request to save the elapsed time in the project
    saveTime(selectedProject, elapsedTime);
  }
});

function updateTime() {
  elapsedTime = Date.now() - startTime;

  seconds = Math.floor((elapsedTime / 1000) % 60);
  minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  seconds = pad(seconds);
  minutes = pad(minutes);
  hours = pad(hours);

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}

// projects selection modal window
const openMyModalToLoadProjectsTimer =
  document.getElementById("openModalOnTimer");
const myModalProjectTimer = document.getElementById("myModalProjectTimer");
const inputProjectTimer = document.getElementById("inputOnTimer");
const projectList = document.querySelectorAll("#projectList");
const projectFolder = document.getElementById("projectFolder");
const noProjectContainer = document.getElementById("noProjectContainer");

openMyModalToLoadProjectsTimer.addEventListener(
  "click",
  openModalToLoadProjects
);
document.addEventListener("click", closeModalToLoadProjects);

function openModalToLoadProjects(e) {
  e.stopPropagation();
  myModalProjectTimer.classList.add("modal-visible");
  inputProjectTimer.focus();
}

function closeModalToLoadProjects(e) {
  if (!myModalProjectTimer.contains(e.target)) {
    myModalProjectTimer.classList.remove("modal-visible");
  }
}

projectList.forEach((project) => {
  project.addEventListener("click", () => {
    projectFolder.innerHTML = project.innerHTML;
    projectFolder.style.width = "auto";
    projectFolder.style.backgroundColor = "#f0f1f2";
    myModalProjectTimer.classList.remove("modal-visible");
  });
});

noProjectContainer.addEventListener("click", () => {
  projectFolder.innerHTML = `<svg class="project-list-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>`;
  projectFolder.style.backgroundColor = "#ffffff";
  myModalProjectTimer.classList.remove("modal-visible");
});

// Filter projects on every key press
function filterProjects() {
  const filterValue = document
    .getElementById("inputOnTimer")
    .value.toLowerCase();
  const listItems = document.querySelectorAll("#projectList");

  listItems.forEach(function (item) {
    const projectName = item.textContent.toLowerCase();
    item.style.display = projectName.includes(filterValue) ? "" : "none";
  });
}
