import createHttpError from "http-errors"
import prisma from "../../prisma/prisma.servise"
import bcrypt from "bcrypt"

export default class authService{
    static async login  (user_Name: string, password: string)  {
        const user = await prisma.user.findUnique({
            where: {
                user_name:user_Name
            }
        })
        if (!user) {
            throw createHttpError(404, "User name not found")
        }
        const compare = bcrypt.compare(password, user.password)
        if (!compare) {
            throw createHttpError(400, 'Wrong Password')
        }
        return user
    }
}

