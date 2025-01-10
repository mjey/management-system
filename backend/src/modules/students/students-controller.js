const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    const students = await getAllStudents(req.query);
    res.status(200).json({ success: true, data: students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
    const { body } = req;
    const response = await addNewStudent(body);
    res.status(201).json({ success: true, message: response.message });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    const { body } = req;
    const response = await updateStudent(body);
    res.status(200).json({ success: true, message: response.message });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const student = await getStudentDetail(id);
    res.status(200).json({ success: true, data: student });

});

const handleStudentStatus = asyncHandler(async (req, res) => {
    const { userId, reviewerId, status } = req.body;
    const response = await setStudentStatus({ userId, reviewerId, status });
    res.status(200).json({ success: true, message: response.message });
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
