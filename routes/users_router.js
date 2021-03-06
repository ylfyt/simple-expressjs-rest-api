import Express from 'express';
import { register, login } from '../controllers/user_controller.js';

const router = Express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;