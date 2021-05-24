const userCtrl = require("../controller/userCtrl");
const router = require("express").Router();
const auth = require("../middleware/auth");

router.post("/register", userCtrl.register);
router.get("/refresh_token", userCtrl.refreshToken);
router.post("/login", userCtrl.login);
router.get("/logout", userCtrl.logout);
router.get("/info", auth, userCtrl.getUser);
router.put("/info/:id", auth, userCtrl.updateUser);



module.exports = router;
