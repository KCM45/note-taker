/** @format */

const notes = require("express").Router();
const fs = require("fs");

const json = require("../db/db.json");

// GET Route for retrieving all the tips
json.get("/", (req, res) => {
  fs.readFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});
