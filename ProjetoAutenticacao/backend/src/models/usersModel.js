import conn from "../config/database.js";

class UsersModel {
  async insertUser(userData) {
    const { user_name, user_email, user_password, user_phone, user_status } =
      userData;

    const query = `INSERT INTO users 
     (user_name, user_email, user_password, 
     user_phone, user_status)
     VALUES (?, ?, ?, ?, ?)`;
    const values = [
      user_name,
      user_email,
      user_password,
      user_phone,
      user_status,
    ];

    const [result] = await conn.execute(query, values);
    return result;
  }

  async selectUsers() {
    const query = `SELECT * FROM users`;
    const [rows] = await conn.execute(query);
    return rows;
  }
}

export default new UsersModel();
