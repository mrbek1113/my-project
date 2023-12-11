import bcrypt from "bcrypt"
import prisma from "../../prisma/prisma.servise"
import createHttpError from "http-errors"





const createUser = async (first_name:string,last_name:string,user_name:string,password:string,phone:string) => {
   const findedUser = await prisma.user.findUnique({
      where: {
   user_name
      }
   })
   if (findedUser) {
      throw createHttpError(403, "User already exist")
   }
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

const updateUser = async (id:number,first_name:string,last_name:string,user_name:string,password:string,phone:string) => {
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
         id,
         user_name,
         first_name,
         last_name,
         phone,
      },
   })

   return user
}
const getAllUser = async (role:string) => {
   const allUser = await prisma.user.findMany({
      where: {
         role:"user"
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

const deleteUser = async (id:number) => {
   const deleteduser = await prisma.user.findUnique({
      where: {
         id
      }
   })
   if (!deleteduser) {
      throw createHttpError(404, "user not found")
   }
   const removeUser = await prisma.user.delete({
      where: {
         id
      },
   })
   return removeUser
}
export default {
   createUser,
   getAllUser,
   updateUser,
   deleteUser
}



