import Express from 'express';
import { verify } from './verifyToken.js';

const router = Express.Router();

router.get('/', verify, (req, res) => {
	res.send(req.user);
});

export default router;
