import Student from "../models/Student.js";

export const getStudent = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

export const insertStudent = async (req, res) => {
    const student = {
        nim: req.body.nim,
        name: req.body.name,
        email: req.body.email
    };

    try {
        const newStudent = new Student(student);
        const savedStudent = await newStudent.save();
        res.status(200).json(savedStudent);
    } catch (err) {
        res.status(400).json({error:err.message});
    }
};