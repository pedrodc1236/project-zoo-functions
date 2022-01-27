const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, entrant) => {
    if (entrant.age < 18) {
      acc.child += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      acc.adult += 1;
    }
    if (entrant.age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const fun = countEntrants(entrants);
  const sum = fun.child * prices.child + fun.adult * prices.adult + fun.senior * prices.senior;
  return sum;
}

// console.log(calculateEntry({}));

// console.log(calculateEntry([
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ]));

module.exports = { calculateEntry, countEntrants };
