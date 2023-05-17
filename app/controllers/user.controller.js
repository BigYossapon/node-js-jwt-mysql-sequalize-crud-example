const { query } = require("express");
const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
var bcrypt = require("bcryptjs");

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};


//user
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
// Create and Save a new Property
// Find a single Property with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Property with id=" + id
      });
    });
};

// Find a single Property with an id
exports.getonuser = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Property with id=" + id
      });
    });
};

// Update a Property by the id in the request
exports.putonuser = (req, res) => {
  const id = req.params.id;
  //const username = req.query.username;
  // const request = {

  // }

  const username = req.body.username;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, 8);
  const country = req.body.country;
  const address = req.body.address;
  const avartar = req.body.avartar;
  const request = { body: { username, email, password, country, address, avartar } }
  User.update(request.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Property was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Property with id=${id}. Maybe Property was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Property with id=" + id
      });
    });
};

// Delete a Property with the specified id in the request
exports.deleteonuser = (req, res) => {
  const id = req.params.id;
  //const username = req.query.username;

  User.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Property was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Property with id=${id}. Maybe Property was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Property with id=" + id
      });
    });
};




//admin
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};



