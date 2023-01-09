import { Router } from 'express';
import ProfileController from '../controller/profile.controller.js';

const router = Router();

router.get('/*', ProfileController.all);
router.get('/find/:id', ProfileController.get);
router.post('/add', ProfileController.create);
router.put('/edit/:id', ProfileController.update);
router.delete('/delete/:id', ProfileController.delete);

export const API_Profile = router;