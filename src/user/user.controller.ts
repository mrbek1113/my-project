import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/prisma.servise";
import userService from "./user.service";
import data from "./user.service"

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { first_name, last_name, phone, user_name, password } = req.body
        const user = await userService.createUser(first_name, last_name, phone, user_name, password)
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
        const { id } = req.params
        const { first_name, last_name, user_name, phone } = req.body
        const updatedUser = await userService.updateUser(+id, first_name, last_name, phone)
        res.send({
            message: "User Updated",
            updatedUser
        })
    } catch (e) {
        next(e)
    }
}

const getAllUser = async (req: Request, res: Response, next: NextFunction) => {
    const { first_name } = req.body
    const users = await userService.getAllUser(first_name)
    res.send({
        message: "All Users",
        users
    })
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params
        const { password: pass, ...rest } = await userService.deleteUser(+id,)
        res.send({
            message: "Deleted User",
            user: rest
        })
    } catch (e) {
        next(e)
    }
}
export default {
    createUser,
    updateUser,
    getAllUser,
    deleteUser
}
