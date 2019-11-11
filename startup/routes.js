const express = require("express");

module.exports = function(app) {
	app.use(
		express.urlencoded({
			extended: false
		})
	);

	// API ROUTINGS
	app.use("/api/users", require("../routes/api/users"));
	app.use("/api/movies", require("../routes/api/movies"));
	app.use("/api/genres", require("../routes/api/genres"));
};
