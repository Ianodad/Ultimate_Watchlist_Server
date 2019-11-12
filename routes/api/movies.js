const express = require("express");
const auth = require("../../middleware/auth");

const Movies = require("../../services/movies");
const Comments = require("../../services/comments");

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

// get all comments belong to the movie
router.get("/:id/comments", (req, res) => {

	// check if id is equal to the index number
	const comments = Comments.some(
		comment => comment.movieId === parseInt(req.params.id)
	);

	!comments
		? res.status(404).send("movie not found")
		: res.send(
				Comments.filter(comment => comment.movieId === parseInt(req.params.id))
		  );
});

router.post("/:id/comment", (req, res) => {
	const { error } = validateComment(req.body);

	if (error) {
		res.status(400).send(error.details[0].message);
		return;
	}
	const { results } = JSON.parse(Movies);
	const movie = results.some(movie => movie.id === parseInt(req.params.id));
	if (!movie) return res.status(400).send("Invalid movie.");

	const newComment = {
		_id: Comments.length,
		movieId: req.body.productId,
		comment: req.body.comment,
		userName: req.body.userId
	};

	Comments.push(newComment);
	res.send(newComment);
});

function validateComment(comment) {
	const schema = {
		movieId: Joi.required(),
		comment: Joi.string().required(),
		username: Joi.string()
	};

	return Joi.validate(comment, schema);
}
module.exports = router;
