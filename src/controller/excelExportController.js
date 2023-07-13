const ExcelJS = require('exceljs');
const Student = require('../models/studentModel');

const exportTableData = async (req, res) => {
  try {
    const students = await Student.find().lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Students');

    // Define table headers
    worksheet.columns = [
      { header: 'Registration Number', key: 'registrationNumber' },
      { header: 'First Name', key: 'firstName' },
      { header: 'Middle Name', key: 'middleName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Gender', key: 'gender' },
      { header: 'Date of Birth', key: 'dob' },
      { header: 'Category', key: 'category' },
      { header: 'Father Name', key: 'fatherName' },
      { header: 'Mother Name', key: 'motherName' },
      { header: 'Religion', key: 'religion' },
      { header: 'City', key: 'city' },
      { header: 'State', key: 'state' },
      { header: 'Country', key: 'country' },
      { header: 'District', key: 'dist' },
      { header: 'Post', key: 'post' },
      { header: 'Pin Code', key: 'pinCode' },
      { header: 'Email', key: 'email' },
      { header: 'Phone No.', key: 'phoneNo' },
      { header: 'Alternate No.', key: 'altNo' },
      { header: 'Parent No.', key: 'parentNo' },
      { header: 'Address', key: 'address' },
      { header: 'Education', key: 'education' },
      { header: 'Branch', key: 'branch' },
      { header: 'Year', key: 'year' },
      { header: 'Status', key: 'status' },
      { header: 'Course Fee', key: 'courseFee' },
    ];

    // Add rows to the worksheet
    students.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="student_data.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};


const exportDiplomaStudents = async (req, res) => {
  try {
    const diplomaStudents = await Student.find({ education: 'Diploma' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Diploma Students');

    // Define table headers
    worksheet.columns = [
      { header: 'Registration Number', key: 'registrationNumber' },
      { header: 'First Name', key: 'firstName' },
      { header: 'Middle Name', key: 'middleName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Gender', key: 'gender' },
      { header: 'Date of Birth', key: 'dob' },
      { header: 'Category', key: 'category' },
      { header: 'Father Name', key: 'fatherName' },
      { header: 'Mother Name', key: 'motherName' },
      { header: 'Religion', key: 'religion' },
      { header: 'City', key: 'city' },
      { header: 'State', key: 'state' },
      { header: 'Country', key: 'country' },
      { header: 'District', key: 'dist' },
      { header: 'Post', key: 'post' },
      { header: 'Pin Code', key: 'pinCode' },
      { header: 'Email', key: 'email' },
      { header: 'Phone No.', key: 'phoneNo' },
      { header: 'Alternate No.', key: 'altNo' },
      { header: 'Parent No.', key: 'parentNo' },
      { header: 'Address', key: 'address' },
      { header: 'Education', key: 'education' },
      { header: 'Branch', key: 'branch' },
      { header: 'Year', key: 'year' },
      { header: 'Status', key: 'status' },
      { header: 'Course Fee', key: 'courseFee' },
    ];

    // Add rows to the worksheet
    diplomaStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="diploma_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};


const exportBtechStudents = async (req, res) => {
  try {
    const btechStudents = await Student.find({ education: 'B.Tech' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Btech Students');

    // Define table headers
    worksheet.columns = [
      { header: 'Registration Number', key: 'registrationNumber' },
      { header: 'First Name', key: 'firstName' },
      { header: 'Middle Name', key: 'middleName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Gender', key: 'gender' },
      { header: 'Date of Birth', key: 'dob' },
      { header: 'Category', key: 'category' },
      { header: 'Father Name', key: 'fatherName' },
      { header: 'Mother Name', key: 'motherName' },
      { header: 'Religion', key: 'religion' },
      { header: 'City', key: 'city' },
      { header: 'State', key: 'state' },
      { header: 'Country', key: 'country' },
      { header: 'District', key: 'dist' },
      { header: 'Post', key: 'post' },
      { header: 'Pin Code', key: 'pinCode' },
      { header: 'Email', key: 'email' },
      { header: 'Phone No.', key: 'phoneNo' },
      { header: 'Alternate No.', key: 'altNo' },
      { header: 'Parent No.', key: 'parentNo' },
      { header: 'Address', key: 'address' },
      { header: 'Education', key: 'education' },
      { header: 'Branch', key: 'branch' },
      { header: 'Year', key: 'year' },
      { header: 'Status', key: 'status' },
      { header: 'Course Fee', key: 'courseFee' },
    ];

    // Add rows to the worksheet
    btechStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="btech_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};


const exportMtechStudents = async (req, res) => {
  try {
    const mtechStudents = await Student.find({ education: 'M.Tech' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Mtech Students');

    // Define table headers
    worksheet.columns = [
      { header: 'Registration Number', key: 'registrationNumber' },
      { header: 'First Name', key: 'firstName' },
      { header: 'Middle Name', key: 'middleName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Gender', key: 'gender' },
      { header: 'Date of Birth', key: 'dob' },
      { header: 'Category', key: 'category' },
      { header: 'Father Name', key: 'fatherName' },
      { header: 'Mother Name', key: 'motherName' },
      { header: 'Religion', key: 'religion' },
      { header: 'City', key: 'city' },
      { header: 'State', key: 'state' },
      { header: 'Country', key: 'country' },
      { header: 'District', key: 'dist' },
      { header: 'Post', key: 'post' },
      { header: 'Pin Code', key: 'pinCode' },
      { header: 'Email', key: 'email' },
      { header: 'Phone No.', key: 'phoneNo' },
      { header: 'Alternate No.', key: 'altNo' },
      { header: 'Parent No.', key: 'parentNo' },
      { header: 'Address', key: 'address' },
      { header: 'Education', key: 'education' },
      { header: 'Branch', key: 'branch' },
      { header: 'Year', key: 'year' },
      { header: 'Status', key: 'status' },
      { header: 'Course Fee', key: 'courseFee' },
    ];

    // Add rows to the worksheet
    mtechStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="mtech_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};

const exportMbaStudents = async (req, res) => {
  try {
    const mbaStudents = await Student.find({ education: 'MBA' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Mba Students');

    // Define table headers
    worksheet.columns = [
      { header: 'Registration Number', key: 'registrationNumber' },
      { header: 'First Name', key: 'firstName' },
      { header: 'Middle Name', key: 'middleName' },
      { header: 'Last Name', key: 'lastName' },
      { header: 'Gender', key: 'gender' },
      { header: 'Date of Birth', key: 'dob' },
      { header: 'Category', key: 'category' },
      { header: 'Father Name', key: 'fatherName' },
      { header: 'Mother Name', key: 'motherName' },
      { header: 'Religion', key: 'religion' },
      { header: 'City', key: 'city' },
      { header: 'State', key: 'state' },
      { header: 'Country', key: 'country' },
      { header: 'District', key: 'dist' },
      { header: 'Post', key: 'post' },
      { header: 'Pin Code', key: 'pinCode' },
      { header: 'Email', key: 'email' },
      { header: 'Phone No.', key: 'phoneNo' },
      { header: 'Alternate No.', key: 'altNo' },
      { header: 'Parent No.', key: 'parentNo' },
      { header: 'Address', key: 'address' },
      { header: 'Education', key: 'education' },
      { header: 'Branch', key: 'branch' },
      { header: 'Year', key: 'year' },
      { header: 'Status', key: 'status' },
      { header: 'Course Fee', key: 'courseFee' },
    ];

    // Add rows to the worksheet
    mbaStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="mba_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};

module.exports = { exportTableData,exportDiplomaStudents,exportBtechStudents,exportMtechStudents,exportMbaStudents };
