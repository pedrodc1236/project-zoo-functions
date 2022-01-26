const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const newObj = {};
    species.forEach((specie) => {
      newObj[specie.name] = specie.residents.length;
    });
    return newObj;
  }
  const { specie, sex } = animal;
  if (Object.keys(animal).length === 1) {
    return species.filter((element) => element.name === specie)[0]
      .residents.length;
  }
  if (Object.keys(animal).length === 2) {
    return species
      .filter((element) => element.name === specie)[0]
      .residents.filter((resident) => resident.sex === sex).length;
  }
}

console.log(countAnimals());

module.exports = countAnimals;
