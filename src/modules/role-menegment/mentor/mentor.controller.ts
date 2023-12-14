import { NextFunction, Request, Response } from "express";
import mentorService from "./mentor.service";

export default class mentorController{
    static async createMentor(req:Request,res:Response,next:NextFunction){
        try {
            const {first_name,last_name,user_name,phone,password}=req.body
            const mentor=await mentorService.createMentor(first_name,last_name,user_name,phone,password)
            res.status(201).send({
                message:"Mentor created",
              "Mentor":mentor
            })
        } catch (e) {
            next(e)
        }
        }

        static async getAllMentor(req:Request,res:Response,next:NextFunction){
            try {
                const mentor=await mentorService.getAllMentor()
                res.status(202).send({
                    message:"All Mentors",
                    "Mentors":mentor
                })
            } catch (e) {
                next(e)
            }
            }
}


