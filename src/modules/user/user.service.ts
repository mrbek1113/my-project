import bcrypt from "bcrypt"
import prisma from "../../prisma/prisma.servise"
import createHttpError from "http-errors"
import { Userbody } from "../../model/user.dto"


 const createUser = async (detail:Userbody) => {
   const findedUser = await prisma.user.findUnique({
      where: {
         user_name:detail.user_name
      }
   })
   if (findedUser) {
      throw createHttpError(403, "User already exist")
   }
   const hashPassword =await  bcrypt.hash(detail.password, 10)
   
   const user = await prisma.user.create({
      data: {
         first_name:detail.first_name,
         last_name:detail.last_name,
         user_name:detail.user_name,
         password: hashPassword,
         phone:detail.phone,

      }
   })
   return user
}

 const updateUser = async (detail:Userbody) => {
   const findedUser = await prisma.user.findUnique({
      where: {
         id:detail.id
      }
   })
   if (!findedUser) {
      throw createHttpError(404, "User not found")
   }
   const user = await prisma.user.update({
      where: {
         id:detail.id
      },
      data: {
         first_name:detail.first_name,
          last_name:detail.last_name,
           phone:detail.phone,
      },
   })

   return user
}
 const getAllUser = async (detail:Userbody) => {
   const allUser = await prisma.user.findMany({
      where: {
         first_name:detail.first_name
      },
      select: {
         id:true,
         first_name: true,
         last_name: true,
         user_name: true,
         phone:true,
         role:true
      }
   })
   return allUser
   
}

 const deleteUser=async(detail:Userbody)=>{
   const deleteduser=await prisma.user.findUnique({
      where:{
         id:detail.id
      }
   })
   if(!deleteduser){
      throw createHttpError(404,"user not found")
   }
   const removeUser=await prisma.user.delete({
      where:{
         id:detail.id
      },
   })
   return removeUser 
}
export default{
   createUser,
   getAllUser,
   updateUser,
   deleteUser
}



