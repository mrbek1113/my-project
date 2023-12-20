import { NextFunction, Request, Response } from "express";
import directionTypeServise from "./directionType.service";
import prisma from "../../prisma/prisma.servise";
import createHttpError from "http-errors";


export default class directionControllerType {
    static async createDirectionType(req: Request, res: Response, next: NextFunction) {
        try {
            const { name } = req.body
            const findDirectionType = await prisma.directionType.findUnique({
                where: {
                    name: name
                }
            })
            if (findDirectionType) {
                throw createHttpError(403, "Direction Type Alredy Exists")
            }
            const direction =await directionTypeServise.createDirectionType(name)
            res.status(200).send({
                message: "Direction Type Created",
                direction
            })
        } catch (e) {
            next(e)
        }
    }

    static async getAllDirectionType(req: Request, res: Response, next: NextFunction) {
        try {
            const { name } = req.body
            const direction =await directionTypeServise.getAllDirectionType(name)
            res.status(200).send({
                message: "All Direction Type",
                "Directions Types": direction
            })
        } catch (e) {
            next(e)
        }
    }
    static async updateDirectionType(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id)
            const { name } = req.body
            const findDirectionType = await prisma.directionType.findUnique({
                where: {
                    id
                }
            })
            if (!findDirectionType) {
                throw createHttpError(404, "Direction Type Not Found")
            }
            const direction =await directionTypeServise.updateDirectionType(id, name)
            res.status(200).send({
                message: "Direction Updated",
                "Updated Direction": direction
            })
        } catch (e) {
            next(e)
        }
    }
    static async deleteDirectionType(req: Request, res: Response, next: NextFunction) {
        try {
            const id = parseInt(req.params.id)
            const findDirectionType = await prisma.directionType.findUnique({
                where: {
                    id
                }
            })
            if (!findDirectionType) {
                throw createHttpError(404, "Direction Type Not Found")
            }
            const direction = await directionTypeServise.deleteDirectionType(id)
            res.status(200).send({
                message: "Direction Type Deleted",
                "Deleted Direction": direction
            })
        } catch (e) {
            next(e)
        }
    }
}