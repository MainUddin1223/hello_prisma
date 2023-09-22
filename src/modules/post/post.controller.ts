import { Request, Response } from "express";
import { postService } from "./post.service";

const createPost = async (req: Request, res: Response) => {
    try {
        const result = await postService.createPost(req.body);
        res.send({
            success: true,
            message: "Post created successfully",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
};
const getAllPost = async (req: Request, res: Response) => {
    try {
        const options = req.query;
        const result = await postService.getAllPost(options);
        res.send({
            success: true,
            message: "Posts retrieved successfully",
            pagination: result.pagination,
            data: result.result
        })
    } catch (error) {
        res.send(error)
    }
};

const updatePost = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const id = Number(req.params.id);
        const result = await postService.updatePost(id, data);
        res.send({
            success: true,
            message: "Post updated successfully",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
};
const deletePost = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const result = await postService.deletePost(id);
        res.send({
            success: true,
            message: "Post updated successfully",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
};

export const PostController = {
    createPost,
    getAllPost,
    updatePost,
    deletePost
}