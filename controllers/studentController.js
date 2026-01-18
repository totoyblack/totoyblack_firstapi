import * as StudentModel from '../models/studentModel.js';

// GET all students
export const getAllStudents = async (req, res) => {
  const students = await StudentModel.getAllStudents();
  res.json(students);
};

// GET single student
export const getStudentById = async (req, res) => {
  const student = await StudentModel.getStudentById(req.params.id);
  res.json(student);
};

// ADD student
export const addStudent = async (req, res) => {
  await StudentModel.addStudent(req.body);
  res.json({ message: "Student added" });
};

// UPDATE student
export const updateStudent = async (req, res) => {
  await StudentModel.updateStudent(req.params.id, req.body);
  res.json({ message: "Student updated" });
};

// UPDATE status only
export const updateStatus = async (req, res) => {
  await StudentModel.updateStatus(req.params.id, req.body.status);
  res.json({ message: "Status updated" });
};

// DELETE student
export const deleteStudent = async (req, res) => {
  await StudentModel.deleteStudent(req.params.id);
  res.json({ message: "Student deleted" });
};
