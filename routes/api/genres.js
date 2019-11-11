const express = require("express");
const Genre = require("../../services/genres");

const router = express.Router();

router.get("/", (req, res) => {
	console.log(Genre);
	res.send(JSON.parse(Genre));
});

router.get("/:id", (req, res) => {
	console.log(Genre);
	res.send(JSON.parse(Genre));
});





module.exports = router;
