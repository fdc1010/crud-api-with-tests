import { Router } from 'express';
import CommentController from '../controller/comment.controller.js';

const router = Router();

router.get('/*', CommentController.all);
router.get('/find/:id', CommentController.get);
router.post('/add', CommentController.create);
router.put('/edit/:id', CommentController.update);
router.delete('/delete/:id', CommentController.delete);
router.delete('/deleteAll', CommentController.deleteAll);

export const API_Comment = router;