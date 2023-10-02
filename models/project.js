const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "projects.json"
);

const getProjectsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Project {
  constructor(name, color, time, person, activity) {
    this.name = name;
    this.color = color;
    this.time = time;
    this.person = person;
    this.activity = activity;
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
