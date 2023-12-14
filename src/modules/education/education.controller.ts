import { NextFunction, Response, Request } from "express";
import educationsService from "./education.service";

export default class educationController {
    static async createEducation(req: Request, res: Response, next: NextFunction) {
        try {
            const { education_name } = req.body

            const education = await educationsService.createEducation(education_name)
            res.send({
                message: "Education created",
                education
            })
        } catch (e) {
            next(e)
        }
    }

    static async getAllEducation(req: Request, res: Response, next: NextFunction) {
        try {
            const { education_name } = req.body

            const education = await educationsService.getAllEducation(education_name)
            res.status(202).send({
                message: "All education",
                "Educations": education
            })
        } catch (e) {
            next(e)
        }
    }
    static async updateEducation(req:Request,res:Response,next:NextFunction){
        const{id}=req.params
        const {education_name}=req.body
        const education= educationsService.updateEducation(+id,education_name)
        res.status(200).send({
            message:"Education Updated",
            "Education":education
        })
    }

    static async deleteEducation(req:Request,res:Response,next:NextFunction){
        const{id}=req.params
        const education=educationsService.deleteEducation(+id)
        res.status(200).send({
            message:"Education deleted",
            "Education":education
        })
    }
}