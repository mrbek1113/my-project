import bcrypt from "bcrypt"
import prisma from "../../../prisma/prisma.servise"
import createHttpError from "http-errors"
import { decodedTextSpanIntersectsWith } from "typescript"


export default class BigAdminServise {

   static async createBigAdmin(first_name: string, last_name: string, user_name: string, password: string, phone: string) {
      const findedBigAdmin = await prisma.user.findUnique({
         where: {
            user_name
         }
      })
      if (findedBigAdmin) {
         throw createHttpError(403, "Big Admin already exist")
      }
      const hashPassword = await bcrypt.hash(password, 10)

      const bigAdmin = await prisma.user.create({
         data: {
            first_name,
            last_name,
            user_name,
            password: hashPassword,
            phone,
            role: "big_admin"

         }
      })
      return bigAdmin
   }

   static async getAllBigAdmin() {
      const allBigAdmin = await prisma.user.findMany({
         where: {
            role: "big_admin"
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
      return allBigAdmin

   }
}








