const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const { sendMail } = require("../services");
const { registrationMail } = require("../templates");
const { nanoid } = require("nanoid");
const router = express.Router();

// Register User
router.post("/", async (req, res) => {
  const {
    name,
    email,
    gender,
    contact,
    location,
    paid,
    registeredBy,
    remarks,
  } = req.body;

  const user = new User();
  user.uuid = nanoid(6);
  user.name = name;
  user.email = email;
  user.contact = contact;
  user.gender = gender;
  user.location = location;
  user.paid = paid;
  user.registeredBy = registeredBy;
  user.remarks = remarks || "";
  user
    .save()
    .then((user) => {
      sendMail(
        email,
        "Get ready for the big day! UMANG 2021",
        registrationMail({ name, email, contact, uuid: user.uuid })
      );
      res.send({ message: "OK", user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: JSON.stringify(err) });
    });
});

// Update User
router.put("/", async (req, res) => {
  const { uuid, email, contact } = req.body;

  User.findOneAndUpdate(
    { uuid },
    { $set: { email, contact } },
    { returnOriginal: false }
  )
    .then((user) => {
      sendMail(
        email,
        "Get ready for the big day! UMANG 2021",
        registrationMail({
          name: user.name,
          email: user.email,
          contact: user.contact,
          uuid: user.uuid,
        })
      );
      res.send({ message: "OK", user });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: JSON.stringify(err) });
    });
});

// Search User
router.get("/", async (req, res) => {
  const { uuid, email, contact } = req.query;

  User.find({
    $or: [
      { uuid: { $regex: new RegExp(uuid, "i") } },
      { email: { $regex: new RegExp(email, "i") } },
      { contact: { $regex: new RegExp(contact, "i") } },
    ],
  })
    .then((users) => {
      res.send({ message: "OK", users });
    })
    .catch((err) => {
      res.status(500).send({ message: err });
    });
});

router.put("/attendance", (req, res) => {
  const { id, isPresent } = req.body;
  if (id) {
    User.updateOne(
      { uuid: id },
      { $set: { attendance: isPresent } }
    )
      .then(() => {
        res.send({ message: "OK" });
      })
      .catch((err) => {
        res.status(500).send({ message: err });
      });
  }
});

module.exports = router;
