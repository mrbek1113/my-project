import { NextFunction, Request, Response } from "express";
import studentService from "./student.service";
import userService from "../../user/user.service";

export default class studentController {
    static async createStudent(req: Request, res: Response, next: NextFunction) {
        try {
            const { first_name, last_name, user_name, phone, password } = req.body
            const student = await studentService.createStudent(first_name, last_name, user_name, phone, password)
            res.status(201).send({
                message: "Student created",
                "student": student
            })
        } catch (e) {
            next(e)
        }
    }
    static async getAllStudent (req: Request, res: Response, next: NextFunction)  {
        try {
            const { user_name } = req.body
            const student = await studentService.getAllStudent(user_name)
            res.status(202).send({
                message: "All Student",
                "All students": student
            })
        } catch (e) {
            next(e)
        }
    }
}


