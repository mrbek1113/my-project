import prisma from "../../prisma/prisma.servise";

export default class directionTypeServise {
    static async createDirectionType(name: string) {
        const direction = await prisma.directionType.create({
            data: {
                name
            }
        })
        return direction
    }

    static async getAllDirectionType(name: string) {
        const direction = await prisma.directionType.findMany({
            where: {
                name
            }
        })
        return direction
    }
    static async updateDirectionType(id:number,name: string) {
        const direction = await prisma.directionType.update({
            where: {
                id
            },
            data: {
                name
            }
        })
        return direction
    }
    static async deleteDirectionType(id:number){
        const direction=await prisma.directionType.delete({
            where:{
                id
            }
        })
        return direction 
    }
}