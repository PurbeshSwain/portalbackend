const Student = require('../models/studentModel');


//Student Addmission

const createStudent = async (req, res) => {
  try {
    const { registrationNumber, firstName, middleName, lastName,
      gender, dob, category, fatherName, motherName, religion,
      city, state, country, dist, post, pinCode, email, phoneNo, altNo, parentNo, address, education, branch, year, status, courseFee
    } = req.body;

    // Check if a file was uploaded
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const photo = req.files.image;
    const imageBuffer = photo.data;

    const student = new Student({
      registrationNumber,
      image: imageBuffer, firstName, middleName, lastName, gender, dob, category, fatherName, motherName, religion,
      city, state, country, dist, post, pinCode, phoneNo, altNo, parentNo, email, address, education, branch, year, status, courseFee
    });

    const savedStudent = await student.save();

    res.json(savedStudent);
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'An error occurred during student admission' });
  }
};



// Fetch all students

const getAllStudents = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const searchQuery = req.query.searchQuery || '';

    const countPromise = Student.countDocuments({
      $or: [
        { registrationNumber: { $regex: searchQuery, $options: 'i' } },
        { firstName: { $regex: searchQuery, $options: 'i' } },
        { middleName: { $regex: searchQuery, $options: 'i' } },
        { lastName: { $regex: searchQuery, $options: 'i' } },
        {
          $expr: {
            $regexMatch: {
              input: {
                $concat: ['$firstName', ' ', '$middleName', ' ', '$lastName'],
              },
              regex: searchQuery,
              options: 'i',
            },
          },
        },
      ],
    });
    const studentsPromise = Student.find({
      $or: [
        { registrationNumber: { $regex: searchQuery, $options: 'i' } },
        { firstName: { $regex: searchQuery, $options: 'i' } },
        { middleName: { $regex: searchQuery, $options: 'i' } },
        { lastName: { $regex: searchQuery, $options: 'i' } },
        {
          $expr: {
            $regexMatch: {
              input: {
                $concat: ['$firstName', ' ', '$middleName', ' ', '$lastName'],
              },
              regex: searchQuery,
              options: 'i',
            },
          },
        },
      ],
    })
      .skip(skip)
      .limit(limit)
      .lean()
      .sort({ _id: -1 })
      .exec();

    const [count, students] = await Promise.all([countPromise, studentsPromise]);

    const totalPages = Math.ceil(count / limit);

    res.json({
      students,
      currentPage: page,
      totalPages,
    });
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'An error occurred while fetching students' });
  }
};


//Count All Students

const countAllStudents = async (req, res) => {
  try {
    const totalCount = await Student.countDocuments();
    const btechCount = await Student.countDocuments({ education: 'B.Tech' });
    const cseCount = await Student.countDocuments({ branch: 'Computer Science & Engineering', education: 'B.Tech'  });
    const civilCount = await Student.countDocuments({  branch: 'Civil Engineering', education: 'B.Tech' });
    const eeCount = await Student.countDocuments({ branch: 'Electrical Engineering', education: 'B.Tech'  });
    const eceCount = await Student.countDocuments({ branch: 'Electronics & Communication Engineering', education: 'B.Tech'  });
    const eeeCount = await Student.countDocuments({ branch: 'Electrical & Electronics Engineering', education: 'B.Tech'  });
    const mechanicalCount = await Student.countDocuments({ branch: 'Mechanical Engineering', education: 'B.Tech'  });

    const diplomaCount = await Student.countDocuments({ education: 'Diploma' });
    const meDiplomaCount = await Student.countDocuments({ branch: 'Mechanical Engineering', education: 'Diploma' });
    const civilDiplomaCount = await Student.countDocuments({ branch: 'Civil Engineering', education: 'Diploma' });

    const mbaCount = await Student.countDocuments({ education: 'MBA' });
    const fmMbaCount = await Student.countDocuments({ branch: 'Financial Management', education: 'MBA' });
    const mmMbaCount = await Student.countDocuments({ branch: 'Marketing Management', education: 'MBA' });

    const mtechCount = await Student.countDocuments({ education: 'M.Tech' });
    const seMtechCount = await Student.countDocuments({ branch: 'Structural Engineering', education: 'M.Tech' });
    const mseMtechCount = await Student.countDocuments({ branch: 'Mechanical System Engineering', education: 'M.Tech'  });

    res.json({
      totalCount, btechCount, cseCount, civilCount, eeCount, eceCount, eeeCount,
      mechanicalCount, diplomaCount, mbaCount, mtechCount,meDiplomaCount,civilDiplomaCount,seMtechCount,
      mseMtechCount,fmMbaCount,mmMbaCount
    });
  } catch (error) {
    console.error('Error retrieving student count:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

//Delete Student
const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params._id; // Use req.params._id instead of req.params.id
    const deletedStudent = await Student.findByIdAndDelete(studentId);

    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = { createStudent, getAllStudents, countAllStudents, deleteStudent };
