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
}

export default new UsersService();
