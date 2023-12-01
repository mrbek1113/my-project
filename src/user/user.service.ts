import bcrypt from "bcrypt"
import prisma from "../prisma/prisma.servise"
import createHttpError from "http-errors"
import { Role, User } from "@prisma/client"

// const getAllUser=async()

export type UserServiceType = {
   first_name: string
   last_name: string
   phone: string
   user_name: string
   password: string
}

const createUser = async (first_name: string, last_name: string, phone: string, user_name: string, password: string) => {
   const findedUser = await prisma.user.findUnique({
      where: {
         user_name
      }
   })
   if (findedUser) {
      throw createHttpError(403, "User already exist")
   }

   const hashPassword = (await bcrypt.hash(password, 10)).toString()
   const user = await prisma.user.create({
      data: {
         first_name,
         last_name,
         user_name,
         password: hashPassword,
         phone,
         role: "admin"
      }
   })
   return user
}

const updateUser = async (id: number, first_name: string, last_name: string, phone: string,) => {
   const findedUser = await prisma.user.findUnique({
      where: {
         id
      }
   })
   if (!findedUser) {
      throw createHttpError(404, "User not found")
   }
   const user = await prisma.user.update({
      where: {
         id
      },
      data: {
          first_name, last_name, phone,
      },
   })

   return user
}


export default {
   createUser,
   updateUser
}

