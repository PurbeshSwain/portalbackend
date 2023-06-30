const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: false },
  image: { type: Buffer, required: false },
  firstName: { type: String, required: false },
  middleName: { type: String, required: false },
  lastName: { type: String, required: false },
  gender: { type: String, required: false },
  dob: { type: String, required: false },
  category: { type: String, required: false },
  fatherName: { type: String, required: false },
  motherName: { type: String, required: false },
  religion: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  country: { type: String, required: false },
  dist: { type: String, required: false },
  post: { type: String, required: false },
  pinCode: { type: Number, required: false },
  phoneNo: { type: Number, required: false },
  altNo: { type: Number, required: false },
  parentNo: { type: Number, required: false },
  email: { type: String, required: false },
  address: { type: String, required: false },
  education: { type: String, required: false },
  branch: { type: String, required: false },
  year: { type: String, required: false },
  status: { type: String, required: false },
  courseFee: { type: Number, required: false },
}, { versionKey: false });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
