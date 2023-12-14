import { Request, Response, NextFunction } from "express";
import prisma from "../../../prisma/prisma.servise";
import createHttpError from "http-errors";
import managerService from "./manager.servise";

export default class managerController {
    static async createManager(req: Request, res: Response, next: NextFunction) {
        try {
            const { first_name, last_name, user_name, phone, password } = req.body
            const findManager = await prisma.user.findUnique({
                where: {
                    user_name, AND: {
                        role: 'manager'
                    }
                }
            })
            if (!findManager) {
                throw createHttpError(404, "Manager not found")
            }
            const manager = managerService.createManager(first_name, last_name, user_name, phone, password)
            res.status(201).send({
                message: "Manager created",
                "Manager": manager
            })
        } catch (e) {
            next(e)
        }
    }
    static async getAllManager(req:Request,res:Response,next:NextFunction){
        try{
            const manager=managerService.getAllManager()
            res.status(200).send({
                message:"All manager",
                "Managers":manager
            })
        } catch (e) {
            next(e)
        }
    }
}