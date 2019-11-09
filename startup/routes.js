const express = require("express");

module.exports = function(app) {
	app.use(
		express.urlencoded({
			extended: false
		})
	);

	// API ROUTINGS
	app.use("/api/user", require("../routes/api/user"));
	app.use("/api/movie", require("../routes/api/movie"));
	app.use("/api/genre", require("../routes/api/genre"));
};
