import { Request, Response } from "express"
import { userService } from "./user.service"
import { Users } from "@prisma/client"

const addUser = async (req: Request, res: Response) => {
    try {
        const data: Users = req.body
        const result = await userService.insertIntoDB(data)
        res.send({
            success: true,
            message: "User created successfully",
            data: result
        })
    } catch (error) {
        console.log(error)
        res.send(error)
    }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
    try {
        const result = await userService.insertOrUpdateProfile(req.body);
        res.send({
            success: true,
            message: "Profile created or updated successfully",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}

const getUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUsers();
        res.send({
            success: true,
            message: "Users retreved successfully",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}
const getSingleUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.getSingleUser(parseInt(req.params.id));
        res.send({
            success: true,
            message: "Users retreved successfully",
            data: result
        })
    } catch (error) {
        res.send(error)
    }
}


export const UserController = {
    addUser,
    insertOrUpdateProfile,
    getUsers,
    getSingleUser
}