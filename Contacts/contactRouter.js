const express = require("express");
const router = express.Router();

const db = require("./contactModel");

//GET Request
router.get("/", (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({
        err: err,
        message: "The users information could not be retrieved."
      });
    });
});

//GET Request with certain user
router.get("/:id", (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({
          message: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        err: err,
        message: "The user information could not be retrieved."
      });
    });
});

//POST Request
router.post("/", (req, res) => {
  const { fullName, email, message } = req.body;
  db.insert(req.body)
    .then(user => {
      if (user) {
        res.status(201).json(user);
      } else {
        res.status(400).json({
          message: "Please provide a name and email for the user."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        err: err,
        message: "There was an error saving user to the database."
      });
    });
});

//PUT Request
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { fullName, email, message } = req.body;
  if (fullName && email && message) {
    db.update(id, req.body)
      .then(updatedUser => {
        if (updatedUser) {
          res.status(200).json(updatedUser);
        } else {
          res.status(404).json({
            message: "The user with the specified ID does not exist."
          });
        }
      })
      .catch(err => {
        res.status(500).json({
          err: err,
          message: "The user information could not be modified."
        });
      });
  } else {
    res.status(400).json({
      message: "Please provide a name and bio for the user."
    });
  }
});

//DELETE Request
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.remove(id)
    .then(deletedCharacter => {
      if (deletedCharacter) {
        res.status(200).json(deletedCharacter);
      } else {
        res.status(404).json({
          message: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        err: err,
        message: "The user could not be removed."
      });
    });
});

module.exports = router;
