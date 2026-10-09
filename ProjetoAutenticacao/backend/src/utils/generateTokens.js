import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET;

class GenerateToken {
  accessToken(user) {
    jwt.sign(
      {
        user_id: user.user_id,
        user_email: user.user_email,
      },
      accessTokenSecret,
      {
        expiresIn: "15m",
      },
    );
  }

  refreshToken(user) {
    jwt.sign(
      {
        user_id: user.user_id,
      },
      refreshTokenSecret,
      {
        expiresIn: "7d",
      },
    );
  }
}

export default new GenerateToken();
