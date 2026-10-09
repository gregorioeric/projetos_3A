import UsersModel from "../models/usersModel.js";

class UsersService {
  async createUser(userData) {
    const result = await UsersModel.insertUser(userData);

    if (result.affectedRows === 0) {
      return false;
    }

    return true;
  }

  async getAllUsers() {
    const result = await UsersModel.selectUsers();

    const users = {
      total: result.length,
      users: result,
    };

    if (result.length === 0) {
      return false;
    }

    return users;
  }

  async getUserByEmail(email, id) {
    const [result] = await UsersModel.selectUserByEmail(email, id);

    if (!result) {
      return false;
    }

    return result;
  }
}

export default new UsersService();
