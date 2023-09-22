import { Post, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

const createPost = async (data: Post): Promise<Post> => {
    const result = await prisma.post.create({
        data,
        include: {
            category: true,
            author: true
        }
    })
    return result
};

const getAllPost = async (options: any) => {
    const { sortBy, sortOrder, searchTerm, limit, page } = options;
    const take = parseInt(limit) || 20;
    const pageValue = parseInt(page);
    const skip = take * pageValue - take || 0;

    return await prisma.$transaction(async (tx) => {
        const result = await tx.post.findMany({
            skip,
            take,
            include: {
                author: true,
                category: true
            },
            orderBy: sortBy && sortOrder ? {
                [sortBy]: sortOrder
            } : { createdAt: 'desc' },
            where: {
                OR: [
                    {
                        title: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    },
                    {
                        author: {
                            name: {
                                contains: searchTerm,
                                mode: 'insensitive'
                            }
                        }
                    }
                ]
            }
        });
        const total = await tx.post.count()
        const pagination = { page, limit, total }

        return { result, pagination }
    })
}

const updatePost = async (id: number, payload: Partial<Post>): Promise<Post> => {
    const result = await prisma.post.update({
        where: {
            id
        },
        data: payload

    });
    return result
}

const deletePost = async (id: number): Promise<Post> => {
    const result = await prisma.post.delete({
        where: {
            id
        }
    });
    return result
}

export const postService = {
    createPost,
    getAllPost,
    updatePost,
    deletePost
}