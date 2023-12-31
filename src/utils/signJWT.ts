import jwt from "jsonwebtoken";
import config from "../config";
import { NewUser } from "../services/users.service";

const signJWT = async (user: NewUser): Promise<string> => {
  const { username } = user;
  console.log(`Attempting to sign token for ${username}`);

  try {
    const token = jwt.sign({ username }, config.server.token.secret, {
      issuer: config.server.token.issuer,
      expiresIn: "1d",
    });

    return token;
  } catch (error: any) {
    throw new Error(error);
  }
};

export default signJWT;
