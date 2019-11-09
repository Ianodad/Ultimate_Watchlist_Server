var request = require("request");

var options = {
	method: "GET",
	url: "https://api.themoviedb.org/3/movie/popular",
	qs: {
		page: "1",
		language: "en-US",
		api_key: "0ac0a0ff34c0490450e8232fa50b2269"
	},
	body: "{}"
};

const movies = [];

request(options, function(error, response, body) {
	if (error) throw new Error(error);

	movies.push(body);
});

module.exports = movies;
