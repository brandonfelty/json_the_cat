const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (!error === null) {
      console.log(error);
      callback(error);
    } else {
      const parsedBody = JSON.parse(body);
      if (parsedBody[0] === undefined) {
        callback("cat type not found");
      } else {
        callback(null, parsedBody[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };