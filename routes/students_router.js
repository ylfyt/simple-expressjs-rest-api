import Express from "express";

import { getStudent, getStudentByNim, insertStudent, deleteStudent, updateStudent } from "../controllers/student_controller.js";

const router = Express.Router();

router.get('/', getStudent);
router.get('/:nim', getStudentByNim);
router.post('/', insertStudent);
router.delete('/:nim', deleteStudent);
router.put('/:nim', updateStudent);

export default router;