let money = +prompt ('what is you month income','');
let time = prompt('data dd-mm-yyyy', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

for (let i = 0; i < 2; i++) {
  let a = prompt('what you will buy in this month', ''),
      b = prompt ('how much does it cost?', '');

  if ((typeof(a) === 'string') && (typeof(a)) != null && (typeof(b)) != null
    && a != '' && b != '' && a.length < 50) {
    console.log('done');
    appData.expenses[a] = b;
  } else {

  }
};

appData.moneyPerDay = appData.budget / 30;
alert('daily budget: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('it is minimum budget'); 
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('it is normal budget');
} else if (appData.moneyPerDay > 2000) {
  console.log('it is high budget');
} else {
  console.log('error');
}