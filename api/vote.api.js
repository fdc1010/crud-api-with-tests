import { Router } from 'express';
import VoteController from '../controller/vote.controller.js';

const router = Router();

router.get('/*', VoteController.all);
router.get('/find/:id', VoteController.get);
router.post('/add', VoteController.create);
router.put('/edit/:id', VoteController.update);
router.delete('/delete/:id', VoteController.delete);

export const API_Vote = router;