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


