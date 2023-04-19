const { authJwt } = require("../middleware");
const user = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //public user
  app.get("/user/all", user.allAccess);
  //user
  app.get(
    "/user/:id",
    [authJwt.verifyToken, authJwt.isUser],
    user.getonuser
  );
  app.put(
    "/user/edit/:id",
    [authJwt.verifyToken, authJwt.isUser],
    user.putonuser
  );

  app.delete(
    "/user/delete/:id",
    [authJwt.verifyToken, authJwt.isUser],
    user.deleteonuser
  );
  //admin
  app.get(
    "/user/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    user.adminBoard
  );

  app.put(
    "/user/edit/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    user.adminBoard
  );

  app.delete(
    "/user/delete/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    user.adminBoard
  );





};
