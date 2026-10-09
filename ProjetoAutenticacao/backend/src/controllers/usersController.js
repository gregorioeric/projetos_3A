import UsersService from "../services/usersService.js";

class UsersController {
  async createUser(req, res) {
    const { user_name, user_email, user_password, user_phone, user_status } =
      req.body;

    const emailExists = await UsersService.getUserByEmail(user_email);

    if (emailExists) {
      return res.status(404).json({
        message: "Email already exists!",
      });
    }

    return res.status(200).json({
      success: "User created successfully!",
    });
  }

  async getUsers(req, res) {
    const result = await UsersService.getAllUsers();

    if (!result) {
      return res.status(404).json({
        error: "Users Not Found!",
      });
    }

    return res.status(200).json({
      result,
    });
  }
}

export default new UsersController();
