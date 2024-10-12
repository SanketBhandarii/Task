import { User } from "../models/userModel.js";

export const imageUpload = async (req, res, next) => {
  const { username, social } = req.body;

  try {
    const newUser = await User.create({
      username,
      social,
      avatar: req.file.path,
    });

    res.json({ status: 200, msg: "User saved successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, msg: "Error saving user", error: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json({ all: allUsers });
  } catch (error) {
    res
      .status(500)
      .json({ status: 500, msg: "Error fetching users", error: error.message });
  }
};
