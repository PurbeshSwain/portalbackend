const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true },
  image: { type: Buffer, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  category: { type: String, required: true },
  fatherName: { type: String, required: true },
  motherName: { type: String, required: true },
  religion: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  dist: { type: String, required: true },
  post: { type: String, required: true },
  pinCode: { type: Number, required: true },
  phoneNo: { type: Number, required: true },
  altNo: { type: Number, required: false },
  parentNo: { type: Number, required: true },
  address: { type: String, required: true },
  education: { type: String, required: true },
  branch: { type: String, required: true },
  year: { type: String, required: true },
  status: { type: String, required: true },
  courseFee: { type: Number, required: true },
}, { versionKey: false });

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
