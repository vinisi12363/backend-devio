import { userRepo } from "@/repositories/user-repository";
import { User } from "@/models/User";
import httpStatus, { HttpStatus } from "http-status";

const createUser = async (user: User) => {
  const result = await userRepo.getUserByUsername(user.username);
  console.log("user exist", result)
  if (result?.rows.length > 0) {
    throw new Error(httpStatus["409"]);
  }
  try {
    return await userRepo.postUser(user);
  } catch (error) {
    console.log("ERROR NO SERVICE", error);
    throw new Error(httpStatus["400"]);
  }
};

const findAll = async () => {
  try {
    return await userRepo.getAllUsers();
  } catch (error) {
    throw new Error(httpStatus[400]);
  }
};

const findOne = async (id: number) => {
  try {
    return await userRepo.getUserById(id);
  } catch (error) {
    throw new Error(httpStatus[400]);
  }
};

const update = async (user: User, id: number) => {
  try {
    const userExist = await userRepo.getUserById(id);
    if (userExist) {
      return await userRepo.updateUser(user, id);
    }
  } catch (error) {
    throw new Error(httpStatus[400]);
  }
};

const remove = async (id:number) => {
    try {
        const userExist = await userRepo.getUserById(id);
        if (userExist) {
          return await userRepo.deleteUser(id);
        }
      } catch (error) {
        throw new Error(httpStatus[400]);
      }
}

export const userService = {
    createUser,
    findAll,
    findOne,
    update,
    remove
}