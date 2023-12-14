import prisma from "../../../prisma/prisma.servise"
import bcrypt from 'bcrypt'

export default class managerService {
    static async createManager(first_name: string, last_name: string, user_name: string, password: string, phone: string) {
        const hashPassword = await bcrypt.hash(password, 10)
        const manager = await prisma.user.create({
            data: {
                first_name,
                last_name,
                user_name,
                password: hashPassword,
                phone,
                role: "manager"
            }
        })
        return manager
    }
    static async getAllManager() {
        const manager = await prisma.user.findMany({
            where: {
                role: 'manager'
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
        return manager
    }
}