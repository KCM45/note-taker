/** @format */

//import * as notes from "express";
const notes = require("express");

const notesRouter = notes.Router();

//import * as fs from "fs";
const fs = require("fs");

// GET Route for retrieving all the tips
notesRouter.get("/", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", function (err, data) {
    console.log(data);
  }).then((data) => res.json(JSON.parse(data)));
});

module.exports = notesRouter;
