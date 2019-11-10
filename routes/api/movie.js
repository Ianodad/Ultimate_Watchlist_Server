const express = require("express");

const Movies = require("../../services/movies");

const router = express.Router();

router.get("/", (req, res) => {
	res.json(JSON.parse(Movies));
});

module.exports = router;
