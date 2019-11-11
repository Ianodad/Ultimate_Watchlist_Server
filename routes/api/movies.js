const express = require("express");
const auth = require("../../middleware/auth");

const Movies = require("../../services/movies");

const router = express.Router();

const Joi = require("joi");

router.get("/", auth, (req, res) => {
	res.json(JSON.parse(Movies));
});

router.get("/:id", (req, res) => {
	const { results } = JSON.parse(Movies);
	const movie = results.some(movie => movie.id === parseInt(req.params.id));

	if (!movie) return res.status(404).send("Movie not found");

	// send filter results
	res.send(results.filter(movie => movie.id === parseInt(req.params.id)));
});

// router.post("/:id/comment", (req, res) => {
// 	const { results } = JSON.parse(Movies);
// 	const movie = results.some(movie => movie.id === parseInt(req.params.id));
// 	if (!movie) return res.status(400).send("Invalid movie.");

// 	const { error } = validateComment(req.body);
// 	if (error) {
// 		res.status(400).send(error.details[0].message);
// 		return;
// 	}

// 	movie.comment = req.body.comment;
// 	// movie.comments = [...req.body];

// 	res.send(movie);
// });

// router.get("/:id/comments", (req, res) => {
// 	console.log(Genre);
// 	res.send(JSON.parse(Genre));
// });

function validateComment(comment) {
	const schema = {
		comment: Joi.string(),
		username: Joi.string().required()
	};

	return Joi.validate(comment, schema);
}
module.exports = router;
