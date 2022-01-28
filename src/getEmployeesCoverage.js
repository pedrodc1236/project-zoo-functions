const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const arrayNameSpecies = (arrayIdsSpecie) =>
  species
    .filter((specie) => arrayIdsSpecie.includes(specie.id))
    .map((element) => element.name);

const arrayLocationSpecies = (arrayLocations) =>
  species
    .filter((specie) => arrayLocations.includes(specie.id))
    .map((element) => element.location);

const fun = () => {
  const arrayObj = employees.map((employee) => ({
    id: employee.id,
    fullname: `${employee.firstName} ${employee.lastName}`,
    species: arrayNameSpecies(employee.responsibleFor),
    locations: arrayLocationSpecies(employee.responsibleFor),
  }));
  return arrayObj;
};

function getEmployeesCoverage(param) {
  if (param === undefined) {
    return fun();
  }
  if (Object.keys(param).length === 1) {
    const { name, id } = param;
    const official = employees.find(
      (employee) =>
        employee.firstName === name ||
        employee.id === id ||
        employee.lastName === name
    );
    const obj = {
      id: official.id,
      fullname: `${official.firstName} ${official.lastName}`,
      species: arrayNameSpecies(official.responsibleFor),
      locations: arrayLocationSpecies(official.responsibleFor),
    };
    return obj;
  }
}

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
