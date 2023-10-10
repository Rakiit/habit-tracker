const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "projects.json"
);

const getProjectsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    console.log(err);
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Project {
  constructor(name, selectedColor, time) {
    this.name = name;
    this.selectedColor = selectedColor;
    this.time = time;
  }

  save() {
    this.id = Math.random().toString();
    getProjectsFromFile((projects) => {
      projects.push(this);
      fs.writeFile(p, JSON.stringify(projects), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProjectsFromFile(cb);
  }

  static findById(id, cb) {
    getProjectsFromFile((projects) => {
      const project = projects.find((p) => p.id === id);
      cb(project);
    });
  }
};
