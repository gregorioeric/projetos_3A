import conn from "../config/database.js";

class TokenModel {
  async selectByToken(token) {
    const [result] = await conn.execute(
      "SELECT * FROM tokens WHERE token = ?;",
      [token],
    );

    return result;
  }

  async insertToken(tokenData) {
    const { user_id, token, token_expiresAt } = tokenData;
    const [result] = await conn.execute(
      `
      INSERT INTO tokens
        (user_id, token, token_expiresAt)
      VALUES
        (?, ?, ?);
      `,
      [user_id, token, token_expiresAt],
    );

    return result;
  }

  async destroyToken(token) {
    const [result] = await conn.execute("DELETE FROM tokens WHERE token = ?;", [
      token,
    ]);

    return result;
  }
}

export default new TokenModel();
