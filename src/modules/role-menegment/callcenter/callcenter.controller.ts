import { NextFunction, Request, Response } from "express";
import callcenterService from "./callcenter.service";
import prisma from "../../../prisma/prisma.servise";
import createHttpError from "http-errors";

export default class callcenterController {
    static async createCallCenter(req: Request, res: Response, next: NextFunction) {
        try {
            const { first_name, last_name, user_name, phone, password } = req.body
            const callcenter = await callcenterService.createCallCenter(first_name, last_name, user_name, phone, password)
            const findedBigAdmin = await prisma.user.findUnique({
                where: {
                    user_name,
                    AND: {
                        role: 'callcenter'
                    }
                }
            })
            if (findedBigAdmin) {
                throw createHttpError(403, "Big Admin already exist")
            }
            res.status(201).send({
                message: "Call center created",
                "Call center": callcenter
            })
        } catch (e) {
            next(e)
        }
    }
    static async getAllCallCetner(req: Request, res: Response, next: NextFunction) {
        const callcenter = await callcenterService.getAllCallCenter()
        try {
            res.status(200).send({
                message: "All call center",
                "Call Centers": callcenter
            })
        } catch (e) {
            next(e)
        }
    }
}