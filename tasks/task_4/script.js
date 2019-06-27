let money, time;

function start() {
  money = +prompt ('what is you month income','');
  time = prompt('data dd-mm-yyyy', '');

  while(isNaN(money) || money == '' || money == null) {
    money = +prompt ('what is you month income','');
  }
}

start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpensise() {
  for (let i = 0; i < 1; i++) {
    let a = prompt('what you will buy in this month', ''),
        b = prompt ('how much does it cost?', '');

    if ((typeof(a) === 'string') && (typeof(a)) != null && (typeof(b)) != null
      && a != '' && b != '' && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
    } else {

    }
  };
}
chooseExpensise();

appData.moneyPerDay = +(appData.budget / 30).toFixed(1);
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

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("how many savings: "),
        percent = +prompt("what procent");
        appData.monthIncome = save/100/12*percent;
    alert("income in month: " + appData.monthIncome);
  }
}

checkSavings();

