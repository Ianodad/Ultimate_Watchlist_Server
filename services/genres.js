var request = require("request");

var options = {
	method: "GET",
	url: "https://api.themoviedb.org/3/genre/movie/list",
	qs: { language: "en-US", api_key: "0ac0a0ff34c0490450e8232fa50b2269" },
	body: "{}"
};

const genre = [];

request(options, function(error, response, body) {
	if (error) throw new Error(error);

	genre.push(body);
});

module.exports = genre;
