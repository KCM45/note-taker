/** @format */

const express = require("express");
const db = require("../db/db.json");
const notesRouter = express();

// GET Route for retrieving all the notes
notesRouter.get("/api/notes", (req, res) => {
  res.json(db);
});
module.exports = notesRouter;
