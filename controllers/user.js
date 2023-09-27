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
