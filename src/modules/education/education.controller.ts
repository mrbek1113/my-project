import { NextFunction, Response, Request } from "express";
import educationsService from "./education.service";

const createEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {education_name} = req.body

        const education = await educationsService.createEducation(education_name)
        res.send({
            message: "Education created",
            education
        })
    } catch (e) {
        next(e)
    }
}

const updateEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params
        const {education_name} = req.body

        const education = await educationsService.updateEducation(+id, education_name)

        res.send({
            message: "Education updated",
            education
        })
    } catch (e) {
        next(e)
    }
}

const deleteEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = req.params

        const education = await educationsService.deleteEducation(+id)

        res.send({
            message: "Education deleted",
            education
        })
    } catch (e) {
        next(e)
    }
}

const getAllEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {education_name} = req.body

        const education = await educationsService.getAllEducation( education_name)
        res.status(202).send({
            message:"All education",
            "Educations":education
        })
    } catch (e) {
        next(e)
    }
}

export default {
    createEducation,
    updateEducation,
    deleteEducation,
    getAllEducation
}