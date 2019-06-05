let money = prompt ('what is you month income','');
let time = prompt('data', '');
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let a1 = prompt('what you will buy in this month', ''),
a2 = prompt ('how much does it cost?', ''),
a3 = prompt('what you will buy in this month', ''),
a4 = prompt ('how much does it cost?', '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(money/30);