var express = require("express");
var router = express.Router();

var userController = require("../controllers/users");

router.get("/", async function (req, res, next) {
  let user = await userController.getListUsers();
  res.render("./manager/usermanager", { user: user, title: "User Manager"});
});

router.delete("/del-user/:id", async function (req, res, next) {
  let { params } = req;
  await userController.remove(params);
  res.send({ res: true });
});

// search
router.get("/search/:value", async function (req, res, next) {
  let key = req.params.value;
  let user = await userController.search(key);
  res.render('./manager/usermanager',{ user });
});


module.exports = router;
