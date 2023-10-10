const Project = require("../models/project");

exports.getIndex = (req, res, next) => {
  res.redirect("/timer");
};

exports.getAddDescription = (req, res, next) => {
  // res.render("user/timer", {
  //   pageTitle: "Start tracking",
  //   path: "/timer",
  // });
  Project.fetchAll((projects) => {
    res.render("user/timer", {
      projs: projects,
      pageTitle: "Start tracking",
      path: "/timer",
    });
  });
};

exports.postAddTimer = (req, res, next) => {};

// exports.getProjects = (req, res, next) => {
//   Project.fetchAll((projects) => {
//     res.render("user/timer", {
//       projs: projects,
//       path: "/timer",
//     });
//   });
// };

exports.getAddReport = (req, res, next) => {
  res.render("user/reports", {
    pageTitle: "Your report",
    path: "/reports",
  });
};

// exports.getAddProject = (req, res, next) => {
//   res.render("user/projects", {
//     pageTitle: "Your projects",
//     proj: projects,
//     path: "/projects",
//     formsCSS: true,
//     projectCSS: true,
//     activeAddProject: true,
//   });
// };
exports.getProjects = (req, res, next) => {
  Project.fetchAll((projects) => {
    res.render("user/projects", {
      projs: projects,
      pageTitle: "Your projects",
      path: "/projects",
    });
  });
};

exports.postAddProject = (req, res, next) => {
  const name = req.body.name;
  const selectedColor = req.body.selectedColor;
  const project = new Project(name, selectedColor);
  project.save();
  res.redirect("/projects");
};
