import { NextFunction, Request, Response } from "express"
import authService from "./auth.service"
import { ControllerType } from '../../model/type.dto'
export default class authController {
    static async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { user_name, password } = req.body
            const user = await authService.login(user_name, password)
            res.send({
                message: "Login succesfully",
                user
            })
        }
        catch (e) {
            next(e)
        }
    }
}
