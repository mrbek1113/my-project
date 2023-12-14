import createHttpError from "http-errors"
import prisma from "../../../prisma/prisma.servise"
import bcrypt from 'bcrypt'
import { createAbstractBuilder, idText } from "typescript"

export default class metorServise {
    static async createMentor(first_name: string, last_name: string, user_name: string, password: string, phone: string) {
        const findStudent = await prisma.user.findUnique({
            where: {
                user_name,
            },
            select: {
                user_name: true
            }
        })
        if (findStudent) {
            throw createHttpError(400, "Mentor alredy exists")
        }
        const hashPassword = (await bcrypt.hash(password, 10)).toString()
        const mentor = await prisma.user.create({
            data: {
                first_name,
                last_name,
                user_name,
                phone,
                password: hashPassword,
                role: "mentor"
            }
        })
        return mentor
    }

    static async getAllMentor() {
        const findMentor = await prisma.user.findMany({
            where: {
                role: "mentor"
            }
        })
        return findMentor
    }
}


