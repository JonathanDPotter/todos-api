import query from "../utils/query";
import bcrypt from "bcrypt";
import signJWT from "../utils/signJWT";
import { pick } from "lodash";

export interface NewUser {
  username: string;
  password: string;
}

interface UserDoc extends NewUser {
  user_id: number;
}

export const getUsers = async (id: string | undefined) => {
  try {
    const result = id
      ? await query("SELECT user_id, username FROM users WHERE user_id=?", [id])
      : await query("SELECT user_id, username FROM users");

    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createUser = async ({ username, password }: NewUser) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const hash = bcrypt.hashSync(password, salt);

    const newUser = { username, password: hash };

    return await query("INSERT INTO users SET ?", [newUser]);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const login = async ({ username, password }: NewUser) => {
  try {
    const userDoc = (await query("SELECT * FROM users WHERE username=?", [
      username,
    ])) as UserDoc[];

    if (!userDoc[0]) throw new Error("User not found.");

    const isAuth = await bcrypt.compare(password, userDoc[0].password);

    if (!isAuth) throw new Error("Password is incorrect.");

    const token = await signJWT(userDoc[0]);

    const user = pick(userDoc[0], ["user_id", "username"]);

    return { user, token };
  } catch (error: any) {
    console.log(error)
    throw new Error(error);
  }
};

export const updateUser = async (
  id: string,
  { username, password }: NewUser
) => {
  const salt = await bcrypt.genSalt(10);

  const hash = bcrypt.hashSync(password, salt);

  const userRecord = { username, password: hash };

  try {
    return await query("UPDATE users SET ? WHERE user_id=?", [userRecord, id]);
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    await query("DELETE FROM todos WHERE user_id=?", [id]);
    return await query("DELETE FROM users WHERE user_id=?", [id]);
  } catch (error: any) {
    throw new Error(error);
  }
};
