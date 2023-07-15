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

// ############################################# exportDiplomaStudents #####################################################

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


// ############################################# export ME diploma Students #####################################################

const exportMEdiplomaStudents = async (req, res) => {
  try {
    const MEdiplomaStudents = await Student.find({ branch: "Mechanical Engineering", education: 'Diploma' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('MEdiploma Students');

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
    MEdiplomaStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="MEdiploma_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};


// ############################################# export Civil Diploma Students #####################################################

const exportCivildiplomaStudents = async (req, res) => {
  try {
    const CivilDiplomaStudents = await Student.find({ branch: "Civil Engineering", education: 'Diploma' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('CivilDiploma Students');

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
    CivilDiplomaStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="CivilDiploma_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};


// ############################################# exportBtechStudents #####################################################

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

// ############################################# exportMtechStudents #####################################################

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


// ############################################# export SE Mtech Students #####################################################

const exportSEmtechStudents = async (req, res) => {
  try {
    const SEmtechStudents = await Student.find({branch: "Structural Engineering",  education: 'M.Tech' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('SEmtech Students');

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
    SEmtechStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="SEmtech_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};

// ############################################# export MSD MtechStudents #####################################################

const exportMSDmtechStudents = async (req, res) => {
  try {
    const MSDmtechStudents = await Student.find({branch: "Mechanical System Design",  education: 'M.Tech' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('MSDmtech Students');

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
    MSDmtechStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="MSDmtech_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};


// ############################################# exportMbaStudents #####################################################


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

// ############################################# export FM MBA Students #####################################################

const exportFMmbaStudents = async (req, res) => {
  try {
    const FMmbaStudents = await Student.find({branch: "Financial Management",  education: 'MBA' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('FMmba Students');

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
    FMmbaStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="FMmba_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};


// ############################################# export MM MBA Students #####################################################

const exportMMmbaStudents = async (req, res) => {
  try {
    const MMmbaStudents = await Student.find({branch: "Marketing Management",  education: 'MBA' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('MMmba Students');

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
    MMmbaStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="MMmba_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};


// ############################################# exportCSEbtechStudents #####################################################



const exportCSEbtechStudents = async (req, res) => {
  try {
    const CSEbtechStudents = await Student.find({ branch: "Computer Science Engineering", education: 'B.Tech' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('CSEbtech Students');

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
    CSEbtechStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="CSEbtech_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};



// ############################################# exportCivilbtechStudents #####################################################



const exportCivilbtechStudents = async (req, res) => {
  try {
    const CivilbtechStudents = await Student.find({ branch: "Civil Engineering", education: 'B.Tech' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Civilbtech Students');

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
    CivilbtechStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="Civilbtech_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};



// ############################################# exportEEbtechStudents #####################################################



const exportEEbtechStudents = async (req, res) => {
  try {
    const EEbtechStudents = await Student.find({ branch: "Electrical Engineering", education: 'B.Tech' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('EEbtech Students');

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
    EEbtechStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="EEbtech_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};



// ############################################# exportEEEbtechStudents #####################################################



const exportEEEbtechStudents = async (req, res) => {
  try {
    const EEEbtechStudents = await Student.find({ branch: "Electrical & Electronics Engineering", education: 'B.Tech' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('EEEbtech Students');

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
    EEEbtechStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="EEEbtech_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};


// ############################################# exportECEbtechStudents #####################################################



const exportECEbtechStudents = async (req, res) => {
  try {
    const ECEbtechStudents = await Student.find({ branch: "Electronics & Communication Engineering", education: 'B.Tech' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('ECEbtech Students');

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
    ECEbtechStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="ECEbtech_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};


// ############################################# exportMEbtechStudents #####################################################



const exportMEbtechStudents = async (req, res) => {
  try {
    const MEbtechStudents = await Student.find({ branch: "Mechanical Engineering", education: 'B.Tech' }).lean();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('MEbtech Students');

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
    MEbtechStudents.forEach((student) => {
      worksheet.addRow(student);
    });

    // Set response headers for file download
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename="MEbtech_students.xlsx"');

    // Stream the workbook to the response
    await workbook.xlsx.write(res);
    res.end();
  } catch (error) {
    console.error('Error exporting table data:', error);
    res.status(500).json({ error: 'An error occurred while exporting table data' });
  }
};



module.exports = {
  exportTableData, exportDiplomaStudents, exportBtechStudents, exportMtechStudents, exportMbaStudents,
  exportCSEbtechStudents,exportCivilbtechStudents,exportEEbtechStudents,exportEEEbtechStudents,exportECEbtechStudents,
  exportMEbtechStudents,exportMEdiplomaStudents,exportCivildiplomaStudents,exportSEmtechStudents,exportMSDmtechStudents,
  exportFMmbaStudents,exportMMmbaStudents
};
