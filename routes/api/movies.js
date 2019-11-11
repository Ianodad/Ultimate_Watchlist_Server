const express = require("express");

const Movies = require("../../services/movies");

const router = express.Router();

router.get("/", (req, res) => {
	res.json(JSON.parse(Movies));
});

router.get("/:id", (req, res) => {
	console.log(Movies.result);
	const movie = Movies.result.some(
		movie => movie.id === parseInt(req.params.id)
	);

	!movie
		? res.status(404).send("Movie not found")
		: // send filter results
		  res.send(Movie.filter(movie => movie.id === parseInt(req.params.id)));
});

// router.post("/:id/comment", (req, res) => {
// 	console.log(Genre);
// 	res.send(JSON.parse(Genre));
// });

module.exports = router;
