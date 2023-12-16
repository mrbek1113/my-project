import { NextFunction, Request, Response } from "express";
import bigAdminService from "./bigAdmin.service";
export default class bigAdminController {
    static async createBigAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            const { first_name, last_name, user_name, phone, password } = req.body
            const bigAdmin = await bigAdminService.createBigAdmin(first_name, last_name, user_name, phone, password)
            res.status(201).send({
                message: "Big Admin created",
                "Big Admin": bigAdmin
            })
        } catch (e) {
            next(e)
        }
    }
    static async getAllBigAdmin(req: Request, res: Response, next: NextFunction) {
        try {
            const bigAdmin = await bigAdminService.getAllBigAdmin()
            res.status(202).send({
                message: "All Big Admins",
                "Big admins": bigAdmin
            })
        } catch (e) {
            next(e)
        }
    }
}
