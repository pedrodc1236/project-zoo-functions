const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) =>
    employee.managers.some((manager) => manager === id));
}

// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const arr = employees
      .filter((employee) => employee.managers
        .find((manager) => manager === managerId));
    return arr.map((obj) => `${obj.firstName} ${obj.lastName}`);
  }
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

// console.log((getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c099')));

module.exports = { isManager, getRelatedEmployees };
