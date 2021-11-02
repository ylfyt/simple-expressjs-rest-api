import Express from "express";

import { getStudent, getStudentByNim, insertStudent, deleteStudent } from "../controllers/student_controller.js";

const router = Express.Router();

router.get('/', getStudent);
router.get('/:nim', getStudentByNim);
router.post('/', insertStudent);
router.delete('/:nim', deleteStudent);

export default router;