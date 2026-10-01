import tokenModel from "../models/tokenModel.js";

class AuthService {
  async getToken(token) {
    const [result] = await tokenModel.selectByToken(token);

    if (!result) {
      return false;
    }

    return result;
  }

  async createToken(tokenData) {
    const result = await tokenModel.insertToken(tokenData);

    if (result.affectedRows === 0) {
      return false;
    }

    return true;
  }

  async deleteToken(token) {
    const result = await tokenModel.destroyToken(token);

    if (result.affectedRows === 0) {
      return false;
    }

    return true;
  }
}

export default new AuthService();
