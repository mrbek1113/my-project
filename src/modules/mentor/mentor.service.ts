import createHttpError from "http-errors"
import prisma from "../../prisma/prisma.servise"
import bcrypt from 'bcrypt'
import { createAbstractBuilder, idText } from "typescript"

const createMentor=async(first_name:string,last_name:string,user_name:string,password:string,phone:string)=>{
const findStudent=await prisma.mentor.findUnique({
    where:{
        user_name,
    },
    select:{
        user_name:true
    }
})
    if(findStudent){
        throw createHttpError(400,"Student alredy exists")
    }
    const hashPassword= (await bcrypt.hash(password,10)).toString()
    const mentor=await prisma.mentor.create({
        data:{
            first_name,
            last_name,
            user_name,
            phone,
            password:hashPassword,
        }
    })
    return mentor
}

const updeteMentor=async(id:number,first_name:string,last_name:string,user_name:string,password:string,phone:string)=>{
    const findMentor=await prisma.mentor.findUnique({
        where:{
            id
        }
    })
    if(!findMentor){
        throw createHttpError(404,"Mentor no found")
    }
    const mentor=await prisma.mentor.update({
        where:{
            id
        },
        data:{
            id,
            first_name,
            last_name,
            user_name,
            phone,
            password
        }
    })
    return mentor
}
const getAllMentor=async (user_name:string)=>{
    const findMentor=await prisma.mentor.findMany({
        where:{
      role:"mentor"
        }
    })
    return findMentor
}
const deleteMentor=async(id:number)=>{
    const findMentor=await prisma.mentor.findUnique({
        where:{
            id
        }
    })
    if(!findMentor){
        createHttpError(404,"Student not found")
    }
    const mentor=await prisma.mentor.delete({
        where:{
            id
        }
    })
    return mentor
}


export default {
createMentor,
updeteMentor,
getAllMentor,
deleteMentor
}