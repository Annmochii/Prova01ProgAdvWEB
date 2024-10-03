import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { CreateHashPassword } from '../utils/HashPasswords';

const prisma = new PrismaClient();

class UserController {
    constructor(){
    }
    async listUser(req: Request, res: Response):Promise<any> {
        try {
            const users = await prisma.user.findMany();
            res.json(users);
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: error
            })
        }
    }

    async createUser(req: Request, res: Response):Promise<any> {
        try {
            const userdata = req.body;

            if (!userdata.email || !userdata.password) {
                return res.status(400).json({
                    status: 400,
                    message: "Você precisa passar o email e a senha no corpo da requisição",
                });
            }

            userdata.password = await CreateHashPassword(userdata.password);

            const newUser = await prisma.user.create({
                data: userdata,
            });

            res.status(201).json({
                status: 201,
                newUser: newUser,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: error
            })
        }
    }

    async updateUser(req: Request, res: Response):Promise<any> {
        try {
            const id = parseInt(req.params.id);
            const body = req.body;

            const updatedUser = await prisma.user.update({
                where: { id: id },
                data: body,
            });

            return res.json({
                status: 200,
                updatedUser: updatedUser,
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                error: error
            })
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id);

            await prisma.user.delete({
                where: { id: id },
            });

            res.status(200).json({
                status: 200,
                message: "Usuário deletado com sucesso",
            });
        } catch (error) {
            console.error(error);
            res.status(400).json({
                status: 400,
                message: "Falha ao deletar o registro",
            });
        }
    }
}

export default new UserController();
