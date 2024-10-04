import getBudgetObject from './7-getBudgetObject'; // remove .js extension

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) { // Using ES6 method shorthand
      return `$${income}`;
    },
    getIncomeInEuros(income) { // Using ES6 method shorthand
      return `${income} euros`;
    },
  };

  return fullBudget;
}
