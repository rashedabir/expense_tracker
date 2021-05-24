const auth = require("../middleware/auth");
const router = require("express").Router();
const transactionCtrl = require("../controller/transactionCtrl");

router
  .route("/transaction")
  .post(auth, transactionCtrl.addTransaction)
  .get(auth, transactionCtrl.getTransaction);

router
  .route("/transaction/:id")
  .delete(auth, transactionCtrl.deleteTransaction);

  
module.exports = router;
