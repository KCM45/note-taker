/** @format */

const express = require("express");
const notesRouter = express.Router();
const fs = require("fs");
const path = require("path");

// GET Route for retrieving all the notes
notesRouter.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
    console.log(data);
    if (err) {
      res.json(`Error: ${err}`);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// POST Route for adding notes
notesRouter.post("/", (req, res) => {
  fs.writeFile(path.join(__dirname, "./db/db.json"), req.body);
});

module.exports = notesRouter;
