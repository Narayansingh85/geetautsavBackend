const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { GENDER, VOLUNTEERS } = require("../constants");

const UserSchema = new Schema({
  uuid: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: [GENDER.MALE, GENDER.FEMALE],
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
    default: true,
  },
  registeredBy: {
    type: String,
    enum: VOLUNTEERS,
    required: true,
  },
  attendance: {
    type: String,
    default: "absent",
    enum: ["present", "absent"],
  },
  remarks: {
    type: String,
  },
  registeredOn: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
