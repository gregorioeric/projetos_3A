import UsersService from "../services/usersService.js";

class UsersController {
  async createUser(req, res) {
    const { user_name, user_email, user_password, user_phone, user_status } =
      req.body;

    const getAllUsers = UsersService.getAllUsers();
    const emailExists = getAllUsers.find(
      (email) => email.user_email === user_email,
    );

    return res.status(200).json({
      emailExists,
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
