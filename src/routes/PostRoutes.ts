import { Router } from "express";
import PostController from "../controllers/PostController";
const postRouter = Router();

//Listar posts
postRouter.get("/posts", PostController.listPosts);

//Inserir posts
postRouter.post("/post", PostController.createPost);

//Atualizar posts
postRouter.put("/post/:id", PostController.updatePost);

//Deletar posts
postRouter.delete("/post/:id", PostController.deletePost);

export default postRouter;