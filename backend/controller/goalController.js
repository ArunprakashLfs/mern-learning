//@desc getGoals
//route GET/api/goals
//@access private
const getGoals = async (req, res) => {
  res.status(200).json({ message: "get Goals" });
};
//@desc setGoals
//route SET/api/goals
//@access private
const setGoals = async (req, res) => {
  if (!req.body.table) {
    res.status(400);
    throw new Error("please add the text field");
  }
  res.status(200).json({ message: "setGoals" });
};

//@desc updateGoals
//route PUT/api/goals/:id
//@access private
const updateGoals = async (req, res) => {
  res.status(200).json({ message: `Update Goals ${req.params.id}` });
};

//@desc deleteGoals
//route DELETE/api/goals/:id
//@access private
const deleteGoals = async (req, res) => {
  res.status(200).json({ message: `delete Goals ${req.params.id}` });
};

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };
