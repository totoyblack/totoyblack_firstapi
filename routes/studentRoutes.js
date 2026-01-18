import express from 'express';

import { getAllStudents, getStudentById, addStudent,updateStudent,updateStatus, deleteStudent} from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getAllStudents);
router.get('/:id', getStudentById);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.patch('/:id/status', updateStatus);
router.delete('/:id', deleteStudent);

export default router;
