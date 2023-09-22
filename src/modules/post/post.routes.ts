import express from 'express';
import { PostController } from './post.controller';

const router = express.Router();

router.get('/', PostController.getAllPost);
router.patch('/:id', PostController.updatePost);
router.delete('/:id', PostController.deletePost);
router.get('/', PostController.getAllPost);
router.post('/create-post', PostController.createPost);


export const postRouter = router