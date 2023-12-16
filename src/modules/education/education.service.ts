import createHttpError from "http-errors"
import prisma from "../../prisma/prisma.servise"
  
export default  class educationService{
    static async createEducation  (education_name: string){
        const findEducation = await prisma.educations.findUnique({
            where: {
                education_name
            }
        })
    
        if (findEducation) {
            throw createHttpError(403, "Education's name already exist")
        }
    
        const education = await prisma.educations.create({
            data: {
                education_name,
            }
        })
    
        return education
    }

    static async getAllEducation  ( education_name: string)  {
        const allEducations = await prisma.educations.findMany({
            where: {
                education_name
            },
    
        })
    
        return allEducations
    }
    static async updateEducation (id:number,education_name:string){
        const findEducation=await prisma.educations.findUnique({
            where:{
                education_name
            }
        })
        if(!findEducation){
            throw createHttpError(404,"Education not found")
        }
        const education=await prisma.educations.update({
            where:{
                education_name
            },
            data:{
                education_name
            }
        })
        return education
    }
    static async deleteEducation(id:number){
        const findedAdmin=await prisma.educations.findUnique({
            where:{
                id
            }
        })
        if(!findedAdmin){
            throw createHttpError(404,"Education not found")
        }
        const education=await prisma.educations.delete({
            where:{
                id
            }
        })
        return education
    }
}