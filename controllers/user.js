exports.getIndex = (req, res, next) => {
  res.redirect("user/timer");
};

exports.getAddActivity = (req, res, next) => {
  res.render("user/timer", {
    pageTitle: "Start tracking",
    path: "user/timer",
  });
};

exports.getAddReport = (req, res, next) => {
  res.render("user/reports", {
    pageTitle: "Your report",
    path: "user/reports",
  });
};

exports.getAddProject = (req, res, next) => {
  res.render("user/projects", {
    pageTitle: "Your projects",
    path: "user/projects",
  });
};
