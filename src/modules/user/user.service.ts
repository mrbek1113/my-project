import bcrypt from "bcrypt"
import prisma from "../../prisma/prisma.servise"
import createHttpError from "http-errors"

export default class userService {
   static async createUser(first_name: string, last_name: string, user_name: string, password: string, phone: string) {

      const hashPassword = await bcrypt.hash(password, 10)

      const user = await prisma.user.create({
         data: {

            first_name,
            last_name,
            user_name,
            password: hashPassword,
            phone,

         }
      })
      return user
   }
   static async updateUser(id: number, first_name: string, last_name: string, user_name: string, password: string, phone: string) {
      const user = await prisma.user.update({
         where: {
            id
         },
         data: {
            id,
            user_name,
            first_name,
            last_name,
            phone,
         },
      })

      return user
   }
   static async getAllUser(role: string) {
      const allUser = await prisma.user.findMany({
         where: {
            role: "user"
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
      return allUser

   }
   static async deleteUser(id: number) {
      const removeUser = await prisma.user.delete({
         where: {
            id
         },
      })
      return removeUser
   }
}







