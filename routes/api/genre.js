const express = require("express");
const Genre = require("../../services/genre.");

const router = express.Router();

router.get("/", (req, res) => {
	console.log(Genre);
	res.send("User working");
});

module.exports = router;
