const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const firtsOrLast = employees.find(
    (employee) =>
      employee.firstName === employeeName || employee.lastName === employeeName,
  );
  if (firtsOrLast === undefined) {
    return {};
  }
  return firtsOrLast;
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
