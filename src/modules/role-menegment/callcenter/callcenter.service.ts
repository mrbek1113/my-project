import prisma from "../../../prisma/prisma.servise";
import bcrypt from 'bcrypt'
export default class callcenterService{
    static async createCallCenter(first_name: string, last_name: string, user_name: string, password: string, phone: string){
        const hashPAssword=await bcrypt.hash(password,10)
        const center=await prisma.user.create({
            data:{
                first_name,
                last_name,
                user_name,
                password:hashPAssword,
                phone,
                role:"callcenter"
            }
        })
        return center
    }
    static async getAllCallCenter(){
        const allCenter=await prisma.user.findMany({
            where:{
                role:"callcenter"
            },
            select:{
                id: true,
                first_name: true,
                last_name: true,
                user_name: true,
                phone: true,
                role: true
            }
        })
        return allCenter
    }
}