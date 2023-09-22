import { Request, Response } from "express";
import { categoryService } from "./category.service";


const insertCategory = async (req: Request, res: Response) => {
    try {
        const result = await categoryService.insertCategory(req.body);
        res.send({
            success: true,
            message: "Category created successfully",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
};

export const categroryController = {
    insertCategory
}