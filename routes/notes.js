/** @format */

const express = require("express");
const db = require("../db/db.json");
const notesRouter = express();
const fs = require("fs");
const path = require("path");

// GET Route for retrieving all the notes
notesRouter.get("/api/notes", (req, res) => {
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
notesRouter.post("/api/notes", (req, res) => {
  db.push(req.body);
  fs.writeFile("../db/db.json", db);
});

module.exports = notesRouter;
