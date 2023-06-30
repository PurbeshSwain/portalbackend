const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  employeeID: { type: String, required: false },
  image: { type: Buffer, required: false },
  firstName: { type: String, required: false },
  middleName: { type: String, required: false },
  lastName: { type: String, required: false },
  gender: { type: String, required: false },
  dob: { type: String, required: false },
  doj: { type: String, required: false },
  city: { type: String, required: false },
  state: { type: String, required: false },
  country: { type: String, required: false },
  dist: { type: String, required: false },
  post: { type: String, required: false },
  pinCode: { type: Number, required: false },
  phoneNo: { type: Number, required: false },
  altNo: { type: Number, required: false },
  email: { type: String, required: false },
  address: { type: String, required: false },
  education: { type: String, required: false },
  department: { type: String, required: false },
  qualification: { type: String, required: false },
  position: { type: String, required: false },
  salary: { type: Number, required: false },
}, { versionKey: false });

const Professor = mongoose.model('Professor', professorSchema);

module.exports = Professor;
