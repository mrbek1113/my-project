import { NextFunction, Request, Response } from "express";
import prisma from '../../prisma/prisma.servise'
import userService from "./user.service";
import createHttpError from "http-errors";
import { number } from "joi";
 const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const {Userbody} = req.body
        const user = await userService.createUser(Userbody)
        res.send({
            message: "User created",
           user
        })
    } catch (e) {
        next(e)
    }
}

const updateUser = async (
    id: number,
    first_name: string,
    last_name: string,
    phone: string
  ) => {
    const findedUser = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!findedUser) {
      throw createHttpError(404, "User not found");
    }
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        first_name,
        last_name,
        phone,
      },
    });
  
    return user;
  };

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    const { first_name } = req.body
    const users = await userService.getAllUser(first_name)
    res.send({
        message: "All Users",
        users
    })
}

 const deleteUser = async (id: number) => {
    const deleteduser = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!deleteduser) {
      throw createHttpError(404, "user not found");
    }
    const removeUser = await prisma.user.delete({
      where: {
        id,
      },
    });
    return removeUser;
  };
export default {
    createUser,
    updateUser,
    getAllUser,
    deleteUser
}
