import { db } from "@/config";
import { User } from "@/models/User";
import { QueryResult } from "pg";

const getAllUsers = async () => {
  const query = `SELECT * FROM  users;`;
  try {
    return await db.query(query);
  } catch (error: any) {
    throw error.message;
  }
};
const getUserById = async (id:number) => {
    const query = `SELECT * FROM  users where id = $1;`;
    try {
      return await db.query(query, [id]);
    } catch (error: any) {
      throw error.message;
    }
  };

  const getUserByUsername = async (username:string) => {
    const query = `SELECT * FROM  users where username = $1;`;
    try {
      return await db.query(query, [username]);
    } catch (error: any) {
      throw error.message;
    }
  };

const postUser = async (user: User): Promise<QueryResult> => {
  const query = `INSERT INTO users (name, username, email, photo, password, admin)
                   VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;
  try {
    return await db.query(query, [
      user.name,
      user.username,
      user.email,
      user.photo,
      user.password,
      user.admin,
    ]);
  } catch (error) {
    throw error;
  }
};

const updateUser = async (user: User, id: number) => {
  const query = `ÌNSERT INTO users (name, username, email, photo, password, admin)
    VALUES ($1, $2, $3, $4, $5, $6 , $7) RETURNING id;`;
  try {
    return await db.query(query, [
      user.name,
      user.username,
      user.email,
      user.photo,
      user.password,
      user.admin,
    ]);
  } catch (error: any) {
    throw error.message;
  }
};
const deleteUser = async (id: number) => {
  const deleteQuery = `
    DELETE FROM users 
    WHERE id = $1
    RETURNING id;
`;

  try {
    return await db.query(deleteQuery, [id]);
  } catch (error: any) {
    throw error.message;
  }
};

export const userRepo = {
    getAllUsers,
    getUserById,
    postUser,
    updateUser,
    deleteUser,
    getUserByUsername,

};
