import Express from "express";

import { getStudent, insertStudent } from "../controllers/student_controller.js";

const router = Express.Router();

router.get('/', getStudent);

router.post('/', insertStudent);


export default router;