const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('\nError fetch details:', error, "\n");
  } else {
    console.log("\n", desc, "\n");
  }
});