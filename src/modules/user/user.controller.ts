import { NextFunction, Request, Response } from "express";
import prisma from '../../prisma/prisma.servise'
import userService from "./user.service";
import createHttpError from "http-errors";
import { number } from "joi";

export default class userController{
  static async  createUser (req: Request, res: Response, next: NextFunction) {
    try {
  
      const {first_name,last_name,user_name,password,phone} = req.body
      const findedUser = await prisma.user.findUnique({
        where: {
           user_name,
           AND:{
            role:"user"
           }
        }
     })
     if (findedUser) {
        throw createHttpError(403, "User already exist")
     }
      const user = await userService.createUser(first_name,last_name,user_name,password,phone)
      res.send({
        message: "User created",
        user
      })
    } catch (e) {
      next(e)
    }
  }
  static async updateUser  (req: Request, res: Response, next: NextFunction)  {
    try {
      const {id}=req.params
      const { first_name,last_name,user_name,password,phone } = req.body
      const findedUser = await prisma.user.findUnique({
        where: {
           user_name,
           AND:{
            role:"user"
           }
        }
     })
     if (!findedUser) {
        throw createHttpError(404, "User not found")
     }
      const user = await userService.updateUser(+id,first_name,last_name,user_name,password,phone)
  
      res.status(200).send({
        message: "User updated",
        user
      })
    } catch (e) {
      next(e)
    }
  }
  static async getAllUser (req: Request, res: Response, next: NextFunction)  {
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
  static async deleteUser  (req: Request, res: Response, next: NextFunction)  {
    try {
      const {id} = req.params
      const idNew=parseInt(id)
      
      const deleteduser = await prisma.user.findUnique({
        where: {
           id:idNew
        }
     })
     if (!deleteduser) {
        throw createHttpError(404, "user not found")
     }
      const user = await userService.deleteUser(+id)
  
      res.send({
        message: "User deleted",
        user
      })
    } catch (e) {
      next(e)
    }
  }
}
