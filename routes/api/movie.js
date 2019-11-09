const express = require("express");

const Movies = require("../../services/movies");

const router = express.Router();

router.get("/", (req, res) => {
	console.log(Movies);
	res.send("User working");
});

module.exports = router;
