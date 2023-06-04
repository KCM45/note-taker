/** @format */

const express = require("express");
const db = require("../db/db.json");
const notesRouter = express();
const fs = require("fs");

// GET Route for retrieving all the notes
notesRouter.get("/api/notes", (req, res) => {
  res.json(db);
});

// POST Route for adding notes
notesRouter.post("/api/notes", (req, res) => {
  db.push(req.body);
  fs.writeFile("../db/db.json", db);
});

module.exports = notesRouter;
