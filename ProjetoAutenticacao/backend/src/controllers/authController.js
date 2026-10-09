import authService from "../services/authService.js";
import usersService from "../services/usersService.js";
import GenerateTokens from "../utils/generateTokens.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

class AuthController {
  async login(req, res) {
    const { user_email, user_password } = req.body;

    if (!user_email || !user_password) {
      return res.status(400).json({
        error: "Fields can not be empyt!",
      });
    }

    const emailExists = await usersService.getUserByEmail(user_email);

    return console.log(emailExists);
  }
}

export default new AuthController();
