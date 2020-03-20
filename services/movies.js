var request = require("request");
const axios = require('axios').default;

// const config = require("config");

// var key = config.get("movieDBkey")


const movies = async() => {
	try {
		const {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=0ac0a0ff34c0490450e8232fa50b2269&language=en-US&page=1');
		// console.log(response)
		return(data)
	} catch (error) {
   		 console.error(error);
  }
};



module.exports = movies;
