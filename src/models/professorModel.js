const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  employeeID: { type: String, required: true },
  image: { type: Buffer, required: true },
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: String, required: true },
  doj: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  dist: { type: String, required: true },
  post: { type: String, required: true },
  pinCode: { type: Number, required: true },
  phoneNo: { type: Number, required: true },
  altNo: { type: Number, required: false },
  email: { type: String, required: true },
  address: { type: String, required: true },
  education: { type: String, required: true },
  department: { type: String, required: true },
  qualification: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: Number, required: true },
}, { versionKey: false });

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;
