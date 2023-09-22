import { PrismaClient, Profile, Users } from "@prisma/client";
const prisma = new PrismaClient()

const insertIntoDB = async (data: Users): Promise<Users> => {
    const result = await prisma.users.create({
        data
    })
    return result
}

const insertOrUpdateProfile = async (data: Profile): Promise<Profile> => {
    const isExist = await prisma.profile.findUnique({
        where: {
            userId: data.userId
        }
    })
    if (isExist) {
        const result = await prisma.profile.update({
            where: {
                userId: data.userId
            },
            data: {
                bio: data.bio
            }
        })
        return result
    }
    else {
        const result = await prisma.profile.create({
            data
        })
        return result
    }
}

const getUsers = async () => {
    const result = await prisma.users.findMany({
        // select: {
        //     email: true
        // },
        include: {
            profile: true
        }
    });
    return result
}


const getSingleUser = async (id: number) => {
    const result = prisma.users.findUnique({
        where: {
            id
        },
        include: {
            profile: true
        }
    })
    return result
}

export const userService = {
    insertIntoDB,
    insertOrUpdateProfile,
    getUsers,
    getSingleUser
}