import createHttpError from "http-errors"
import prisma from "../prisma/prisma.servise"
import bcrypt from "bcrypt"

// const register = async (user_name: string, password: string) => {
//     const findUser = await prisma.user.findUnique({
//         where: {
//             user_name
//         }
//     })
//     if (findUser) {
//         throw createHttpError(400, "User name already exists")
//     }
//     const hashpassword = await bcrypt.hash(password, 10)
//     const user = await prisma.user.create({
//         data: {
//             user_name,
//             password: hashpassword,
//             role:"student"
//         }
//     })
// }

const login = async (user_Name: string, password: string) => {
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

export default {
    login
}