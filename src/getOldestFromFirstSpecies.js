const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstSpecie = employees.find((employee) => employee.id === id).responsibleFor[0];
  const animals = species.find((specie) => specie.id === firstSpecie).residents;
  let ageAnimal = 0;
  animals.forEach((animal) => {
    if (animal.age > ageAnimal) {
      ageAnimal = animal.age;
    }
  });
  const obj = animals.find((element) => element.age === ageAnimal);
  return Object.values(obj);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
