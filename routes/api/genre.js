const express = require("express");
const Genre = require("../../services/genre.");

const router = express.Router();

router.get("/", (req, res) => {
	console.log(Genre);
	res.send(JSON.parse(Genre));
});

module.exports = router;
