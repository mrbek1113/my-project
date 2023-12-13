import bcrypt from "bcrypt"
import prisma from "../../prisma/prisma.servise"
import createHttpError from "http-errors"





const createBigAdmin = async (first_name:string,last_name:string,user_name:string,password:string,phone:string) => {
   const findedBigAdmin = await prisma.bigAdmin.findUnique({
      where: {
   user_name
      }
   })
   if (findedBigAdmin) {
      throw createHttpError(403, "Big Admin already exist")
   }
   const hashPassword = await bcrypt.hash(password, 10)

   const bigAdmin = await prisma.bigAdmin.create({
      data: {
         first_name,
         last_name,
         user_name,
         password: hashPassword,
         phone,

      }
   })
   return bigAdmin
}

const updateBigAdmin = async (id:number,first_name:string,last_name:string,user_name:string,password:string,phone:string) => {
   const findedBigAdmin = await prisma.bigAdmin.findUnique({
      where: {
         id
      }
   })
   if (!findedBigAdmin) {
      throw createHttpError(404, "Big Admin not found")
   }
   const bigAdmin = await prisma.bigAdmin.update({
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

   return bigAdmin
}
const getAllBigAdmin = async (role:string) => {
   const allBigAdmin = await prisma.bigAdmin.findMany({
      where: {
         role:"big_admin"
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

const deleteBigAdmin = async (id:number) => {
   const findedBigAdmin = await prisma.bigAdmin.findUnique({
      where: {
         id
      }
   })
   if (!findedBigAdmin) {
      throw createHttpError(404, "Big Admin not found")
   }
   const deletedBigAdmin = await prisma.bigAdmin.delete({
      where: {
         id
      },
   })
   return deletedBigAdmin
}
export default {
createBigAdmin,
updateBigAdmin,
getAllBigAdmin,
deleteBigAdmin
}



