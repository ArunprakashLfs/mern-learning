const express = require("express");
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controller/goalController");

const router = express.Router();

// router.get("/", getGoals);
// router.post("/", setGoals);
//simplified version of above

router.route("/").get(getGoals).post(setGoals);

// router.put("/:id", updateGoals);
// router.delete("/:id", deleteGoals);
//simplified version of above

router.route("/:id").put(updateGoals).delete(deleteGoals);

module.exports = router;
