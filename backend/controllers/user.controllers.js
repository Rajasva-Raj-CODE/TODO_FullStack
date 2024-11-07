import USER from "../models/users.model.js";
import { z } from "zod";

const userSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  username: z
    .string()
    .min(3, { message: "Username must be atleast 3 characters" }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!email || !username || !password) {
      return res
        .status(400)
        .json({ sucess: false, message: "All fields are required" });
    }
    const validation = userSchema.safeParse({ email, username, password });
    if (!validation.success) {
      const errorMessage = validation.error.errors.map((err) => err.message);
      return res.status(400).json({ errors: errorMessage });
    }
    const user = await USER.findOne({ email });
    if (user) {
      res
        .status(400)
        .json({ sucess: false, message: "User already registered" });
    }
    const newUser = new USER({ username, email, password });y
    await newUser.save();
    if (newUser) {
      res
        .status(200)
        .json({ sucess: true, message: "User registered successfully", user });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ sucess: false, message: "Something went wrong" });
  }
};





export const login = async (req, res) => {};

export const logout = (req, res) => {
  console.log("Logout function called");
};
