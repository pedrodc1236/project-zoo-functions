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
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: arrayNameSpecies(employee.responsibleFor),
    locations: arrayLocationSpecies(employee.responsibleFor),
  }));
  return arrayObj;
};

const fun2 = (test) => {
  const obj = {
    id: test.id,
    fullName: `${test.firstName} ${test.lastName}`,
    species: arrayNameSpecies(test.responsibleFor),
    locations: arrayLocationSpecies(test.responsibleFor),
  };
  return obj;
};

function getEmployeesCoverage(param) {
  if (param === undefined) {
    return fun();
  }
  const official = employees.find(
    (employee) =>
      employee.firstName === param.name
      || employee.id === param.id
      || employee.lastName === param.name,
  );
  if (official === undefined) {
    throw new Error('Informações inválidas');
  }
  if (Object.keys(param).length === 1) {
    return fun2(official);
  }
}

module.exports = getEmployeesCoverage;
