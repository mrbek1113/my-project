import bcrypt from "bcrypt"
import prisma from "../../prisma/prisma.servise"
import createHttpError from "http-errors"





const createAdmin = async (first_name:string,last_name:string,user_name:string,password:string,phone:string) => {
   const findedAdmin = await prisma.admin.findUnique({
      where: {
   user_name
      }
   })
   if (findedAdmin) {
      throw createHttpError(403, "Admin already exist")
   }
   const hashPassword = await bcrypt.hash(password, 10)

   const admin = await prisma.admin.create({
      data: {
         first_name,
         last_name,
         user_name,
         password: hashPassword,
         phone,

      }
   })
   return admin
}

const updateAdmin = async (id:number,first_name:string,last_name:string,user_name:string,password:string,phone:string) => {
   const findedAdmin = await prisma.admin.findUnique({
      where: {
         id
      }
   })
   if (!findedAdmin) {
      throw createHttpError(404, "Admin not found")
   }
   const admin = await prisma.admin.update({
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

   return admin
}
const getAllAdmin = async (role:string) => {
   const allAdmin = await prisma.admin.findMany({
      where: {
         role:"admin"
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

const deleteAdmin = async (id:number) => {
   const deletedAdmin = await prisma.admin.findUnique({
      where: {
         id
      }
   })
   if (!deletedAdmin) {
      throw createHttpError(404, "Admin not found")
   }
   const removeUser = await prisma.admin.delete({
      where: {
         id
      },
   })
   return removeUser
}
export default {
createAdmin,
getAllAdmin,
deleteAdmin,
updateAdmin
}



