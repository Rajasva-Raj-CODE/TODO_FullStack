import TODO from "../models/todo.model.js";

export const createTodo = async (req, res) => {
  try {
    const { text, completed } = req.body;
    const todo = new TODO({ text, completed });
    await todo.save();
    res
      .status(200)
      .json({ sucess: true, message: "Todo created successfully", todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: "Something went wrong" });
  }
};

export const getTodo = async (req, res) => {
  try {
    const todo = await TODO.find({});
    if (!todo) {
      return res.status(404).json({ sucess: false, message: "No Todos found" });
    }
    res.status(200).json({ sucess: true, message: "Todos found", todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: "Something went wrong" });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const todoId = req.params.id;
    const updatedTodo = await TODO.findByIdAndUpdate(todoId, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({
        sucess: true,
        message: "Todos udpated successfully",
        updatedTodo,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: "Something went wrong" });
  }
};

export const deleteTodo = async (req, res) => {
    try {
        const todoId = req.params.id;
        const deletedTodo = await TODO.findByIdAndDelete(todoId);
        res.status(200).json({ sucess: true, message: "Todo deleted successfully", deletedTodo });
    } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, message: "Something went wrong" });
    }
}
