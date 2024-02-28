const asyncHandler = require("express-async-handler");
const Goal = require("../modal/goalModal");
//@desc getGoals
//route GET/api/goals
//@access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});
//@desc setGoals
//route SET/api/goals
//@access private
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add the text field");
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

//@desc updateGoals
//route PUT/api/goals/:id
//@access private
const updateGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

//@desc deleteGoals
//route DELETE/api/goals/:id
//@access private
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Goal Not Found");
  }
  await goal.deleteOne();
  res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
