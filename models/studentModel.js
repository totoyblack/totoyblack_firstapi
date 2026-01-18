import db from '../config/db.js';

// GET all students
export const getAllStudents = async () => {
  const [rows] = await db.query("SELECT * FROM tbl_student");
  return rows;
};

// GET single student by ID
export const getStudentById = async (id) => {
  const [rows] = await db.query(
    "SELECT * FROM tbl_student WHERE id = ?",
    [id]
  );
  return rows[0];
};

// ADD student
export const addStudent = async (student) => {
  const { firstname, lastname, gender, age, course_id, department_id, status } = student;

  await db.query(
    "INSERT INTO tbl_student (firstname, lastname, gender, age, course_id, department_id, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [firstname, lastname, gender, age, course_id, department_id, status]
  );
};

// UPDATE student
export const updateStudent = async (id, student) => {
  const { firstname, lastname, gender, age, course_id, department_id, status } = student;

  await db.query(
    "UPDATE tbl_student SET firstname=?, lastname=?, gender=?, age=?, course_id=?, department_id=?, status=? WHERE id=?",
    [firstname, lastname, gender, age, course_id, department_id, status, id]
  );
};

// UPDATE status only
export const updateStatus = async (id, status) => {
  await db.query(
    "UPDATE tbl_student SET status=? WHERE id=?",
    [status, id]
  );
};

// DELETE student
export const deleteStudent = async (id) => {
  await db.query(
    "DELETE FROM tbl_student WHERE id=?",
    [id]
  );
};
