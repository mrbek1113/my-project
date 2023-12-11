import createHttpError from "http-errors"
import prisma from "../../prisma/prisma.servise"
import bcrypt from 'bcrypt'
import { idText } from "typescript"

const createStudent=async(first_name:string,last_name:string,user_name:string,password:string,phone:string)=>{
const findStudent=await prisma.student.findUnique({
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
    const hashPassword= await bcrypt.hash(password,10).toString()
    const student=await prisma.student.create({
        data:{
            first_name,
            last_name,
            user_name,
            phone,
            password:hashPassword,
        }
    })
    return student
}

const updeteStudent=async(id:number,first_name:string,last_name:string,user_name:string,password:string,phone:string)=>{
    const findStudent=await prisma.student.findUnique({
        where:{
            id
        }
    })
    if(!findStudent){
        throw createHttpError(404,"Student no found")
    }
    const student=await prisma.student.update({
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
    return student
}
const getAllStudent=async (user_name:string)=>{
    const findStudent=await prisma.student.findMany({
        where:{
            user_name
        }
    })
    return findStudent
}


export default {
    createStudent,
    updeteStudent,
    getAllStudent
}