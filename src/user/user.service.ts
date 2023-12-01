import bcrypt from "bcrypt"
import prisma from "../prisma/prisma.servise"
import createHttpError from "http-errors"
import { Role, User } from "@prisma/client"

// const getAllUser=async()

const createUser=async(first_name:string,last_name:string,phone:string,user_name:string,password:string)=>{
   const findedUser=await prisma.user.findUnique({
      where:{
         user_name
      }
   })
   if(findedUser){
      throw createHttpError(403,"User already exist")
   }
   if(user_name.length<=4 && user_name.length>=16){
      throw createHttpError(401,"User name length was not correct")
   }
   const hashPassword=(await bcrypt.hash(password,10)).toString()
   console.log(hashPassword)
   const user=await prisma.user.create({
        data:{
           first_name:first_name,
           last_name:last_name,
            user_name:user_name,
            password :hashPassword,
            phone:phone,
            role:"admin"
        }
     })
     return user
    }


    export default {
        createUser
    }

