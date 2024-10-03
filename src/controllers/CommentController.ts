import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CommentController {
    constructor() {}

    async listComments(req: Request, res: Response):Promise<any> {
        try {
            const comments = await prisma.comment.findMany();
            res.json(comments);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                error: error
            });
        }
    }

    async createComment(req: Request, res: Response) {
        const commentData = req.body;
        try {
            const newComment = await prisma.comment.create({
                data: commentData
            });
            console.log("Comentário criado com sucesso");
            res.json({
                status: 200,
                newComment: newComment
            });
        } catch (error) {
            console.log("Erro ao criar comentário");
            res.json({
                status: 500,
                message: error
            });
        }
    }

    async updateComment(req: Request, res: Response) {
        const commentData = req.body;
        const commentId = req.params.id;
        try {
            const updatedComment = await prisma.comment.update({
                where: {
                    id: parseInt(commentId)
                },
                data: commentData
            });
            console.log("Comentário atualizado com sucesso");
            res.json({
                status: 200,
                updatedComment: updatedComment
            });
        } catch (error) {
            console.log("Erro ao atualizar comentário");
            res.json({
                status: 500,
                message: error
            });
        }
    }

    async deleteComment(req: Request, res: Response) {
        const commentID = req.params.id;
        try {
            await prisma.comment.delete({
                where: {
                    id: parseInt(commentID)
                }
            });
            res.json({
                status: 200,
                message: 'Comentário deletado com sucesso'
            });
        } catch (error) {
            res.json({
                status: 500,
                message: error
            });
        }
    }
}

export default new CommentController();
