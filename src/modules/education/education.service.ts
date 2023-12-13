import createHttpError from "http-errors"
import prisma from "../../prisma/prisma.servise"

const createEducation = async (education_name: string) => {
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

const updateEducation = async (id: number, education_name: string) => {
    const findEducation = await prisma.educations.findUnique({
        where: {
            id
        }
    })

    if(!findEducation) {
        throw createHttpError(404, "Education not found")
    }

    const education = await prisma.educations.update({
        where: {
            id
        },
        data: {
            education_name
        }
    })

    return education
}

const deleteEducation = async (id: number) => {
    const findEducation = await prisma.educations.findUnique({
        where: {
            id
        }
    })

    if (!findEducation) {
        throw createHttpError(404, "Education not found")
    }

    const education = await prisma.educations.delete({
        where: {
            id
        }
    })

    return education
}

const getAllEducation = async ( education_name: string) => {
    const allEducations = await prisma.educations.findMany({
        where: {
            education_name
        },

    })

    return allEducations
}

export default {
    createEducation,
    updateEducation,
    deleteEducation,
    getAllEducation
}