const Project = require("../models/project");

exports.getIndex = (req, res, next) => {
  res.redirect("/timer");
};

exports.getAddActivity = (req, res, next) => {
  res.render("user/timer", {
    pageTitle: "Start tracking",
    path: "/timer",
  });
};

exports.getAddReport = (req, res, next) => {
  res.render("user/reports", {
    pageTitle: "Your report",
    path: "/reports",
  });
};

exports.getAddProject = (req, res, next) => {
  res.render("user/projects", {
    pageTitle: "Your projects",
    path: "/projects",
  });
};

exports.postAddProject = (req, res, next) => {
  const name = req.body.name;
  const color = req.body.color;
  const project = new Project(name, color, time, person, activity);
  project.save();
  res.redirect("/projects");
};

exports.getProjects = (req, res, next) => {
  Project.fetchAll((projects) => {
    res.render("user/projects", {
      projects,
      path: "/projects",
    });
  });
};
