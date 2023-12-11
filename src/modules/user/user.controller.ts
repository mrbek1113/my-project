import { NextFunction, Request, Response } from "express";
import prisma from '../../prisma/prisma.servise'
import userService from "./user.service";
import createHttpError from "http-errors";
import { number } from "joi";
import { Userbody } from "../../model/user.dto";
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const {first_name,last_name,user_name,password,phone} = req.body
    const user = await userService.createUser(first_name,last_name,user_name,password,phone)
    res.send({
      message: "User created",
      user
    })
  } catch (e) {
    next(e)
  }
}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id}=req.params
    const { first_name,last_name,user_name,password,phone } = req.body
    const user = await userService.updateUser(+id,first_name,last_name,user_name,password,phone)

    res.send({
      message: "User updated",
      user
    })
  } catch (e) {
    next(e)
  }
};

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {user_name} = req.body
    const user = await userService.getAllUser(user_name)

    res.send({
      message: "All users",
      user
    })
  } catch (e) {
    next(e)
  }
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {id} = req.params
    const user = await userService.deleteUser(+id)

    res.send({
      message: "User deleted",
      user
    })
  } catch (e) {
    next(e)
  }
};
export default {
  createUser,
  updateUser,
  getAllUser,
  deleteUser
}
