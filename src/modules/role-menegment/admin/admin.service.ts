import bcrypt from "bcrypt"
import prisma from "../../../prisma/prisma.servise"
import createHttpError from "http-errors"
 
 
export default class AdminService {
    static async createAdmin (first_name: string, last_name: string, user_name: string, password: string, phone: string) {
        const findedAdmin = await prisma.user.findUnique({
            where: {
                user_name
            }
        })
        if (findedAdmin) {
            throw createHttpError(403, "Admin already exist")
        }
        const hashPassword = await bcrypt.hash(password, 10)
    
        const admin = await prisma.user.create({
            data: {
                first_name,
                last_name,
                user_name,
                password: hashPassword,
                phone,
                role: 'admin'
    
            }
        })
        return admin
    }

    static async getAllAdmin (){
        const allAdmin = await prisma.user.findMany({
            where: {
                role: "admin"
            },
            select: {
                id: true,
                first_name: true,
                last_name: true,
                user_name: true,
                phone: true,
                role: true
            }
        })
        return allAdmin
    
    }
}




