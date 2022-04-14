const request = require('request');
const args = process.argv.slice(2);
const breed = args;

if (breed.length >= 1) {
  request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
    if (error) {
      console.log("error:", error);
    } else {
      const parsedBody = JSON.parse(body);
      if (parsedBody[0] === undefined) {
        console.log('Breed not found');
      } else {
        console.log("\n description:", parsedBody[0].description, '\n');
      }
    }
  });
} else {
  console.log('use command line argument to search for descroption of cat');
}
