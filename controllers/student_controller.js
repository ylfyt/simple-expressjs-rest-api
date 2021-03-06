import Students from "../models/Student.js";

export const getStudent = async (req, res) => {
    try {
        const students = await Students.find();
        res.json(students);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
};

export const getStudentByNim = async (req, res) => {
    const nim = req.params.nim;
    try {
        const student = await Students.findOne({nim: nim});
        if (student){
            res.json(student);
        }
        else{
            res.status(404).json({error: "Student not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const insertStudent = async (req, res) => {
    const student = {
        nim: req.body.nim,
        name: req.body.name,
        email: req.body.email
    };

    try {
        const newStudent = new Students(student);
        const savedStudent = await newStudent.save();
        res.status(200).json(savedStudent);
    } catch (err) {
        res.status(400).json({error:err.message});
    }
};

export const deleteStudent = async (req, res) => {
    const nim = req.params.nim;

    try { 
        const removedStudent = await Students.findOneAndRemove({nim: nim});
        if (removedStudent){
            res.json(removedStudent);
        }
        else{
            res.status(404).json({error: "Student not found"});
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

export const updateStudent = async (req, res) => {
    const nim = req.params.nim;

    try {
        const newData = {
            name: req.body.name, 
            email: req.body.email
        };
        const updatedStudent = await Students.updateOne(
            {nim:nim}, 
            { $set: newData }
        );
        res.json(updatedStudent);
    } catch (error) {
        res.status(400).json({error: error.message});
    }

};