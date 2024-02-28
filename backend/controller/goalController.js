//@desc getGoals
//route GET/api/goals
//@access private
const getGoals = (req, res) => {
  res.status(200).json({ message: "get Goals" });
};
//@desc setGoals
//route SET/api/goals
//@access private
const setGoals = (req, res) => {
  res.status(200).json({ message: "setGoals" });
};

//@desc updateGoals
//route PUT/api/goals
//@access private
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
};

//@desc deleteGoals
//route DELETE/api/goals
//@access private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `delete Goals ${req.params.id}` });
};

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
