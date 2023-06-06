/** @format */

const express = require("express");
const notesRouter = express.Router();
const fs = require("fs");
const path = require("path");
const { v1: uuidv1 } = require("uuid");

notesRouter.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", (err, data) => {
    if (err) {
      res.json(`Error: ${err}`);
    } else {
      res.json(JSON.parse(data));
    }
  });
});

// POST Route for adding notes
notesRouter.post("/", (req, res) => {
  console.log(req.body);
  let notes = [];
  let raw = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf-8");
  let current = JSON.parse(raw);
  current.forEach((element) => {
    notes.push(element);
  });
  const newNote = { id: uuidv1(), title: req.body.title, text: req.body.text };
  notes.push(newNote);
  console.log("Notes", newNote);

  fs.writeFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes),
    "utf8",
    (err) => {
      if (err) {
        res.json(`Error: ${err}`);
      } else {
        console.log("success!");
        res.json({ ok: true });
      }
    }
  );
});
module.exports = notesRouter;
