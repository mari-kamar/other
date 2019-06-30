/*let newText = prompt('how is your day?', '');
console.log(newText);*/

//Выведите столбец чисел от 1 до 50
/*
let i = 1;
while (i <=50) {
  console.log(i);
  i++;
};*/
//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран. 

/*let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
};*/

//Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива. 
/*
let arr = [2, 3, 4, 5];
console.log('array length: ' + arr.length);
let result = 1;
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
};
console.log(result);*/

//Дан объект obj с ключами 'Минск', 'Москва', 'Киев' с элементами 'Беларусь', 'Россия', 'Украина'. 
//С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'.
/*
let obj = {
  Minsk: "Belarus",
  Moscow: "Russia",
  Kiev: "Ukraine"
};

for (key in obj) {
  console.log(key + ' is a capital of ' + obj[key]);
};*/


//Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. Запишите ее в переменную result.
/*
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + arr[i];
};
console.log(sum);*/

//Дан объект obj. С помощью цикла for-in выведите на экран ключи и элементы этого объекта.
/*let obj = {
  green: 'green', 
  red: 'red', 
  blue: 'blue'
};
for (key in obj) {
  console.log('key: ' + key + ', obj[key] is: ' + obj[key]);
};*/

//Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'.
/*let obj = {
  Kolya: '200',
  Vasya: '300',
  Petr: '400'
};
for (key in obj) {
  console.log(key + ' salary is ' + obj[key] + ' dollars');
};*/

//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите на экран столбец тех элементов массива, которые больше 3-х, но меньше 10.
/*let arr = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 3 && arr[i] < 10) {
    console.log(arr[i]);
  }
};*/

//Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива. 
/*let arr = [2, 5, -9, 15, 0, -4];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sum += arr[i];
  };
};
console.log(sum);*/

//Дан массив с элементами 1, 2, 5, 9, 4, 13, 4, 10. С помощью цикла for и оператора if проверьте есть ли 
//в массиве элемент со значением, равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.
/*let arr = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 4) {
    console.log('Got it!');
  };
};*/

//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.
/*let arr = ['10', '20', '30', '50','235', '3000'];
let result = [];
for (i = 0; i < arr.length; i++) {
  if (arr[i].charAt(0) == '1' || arr[i].charAt(0) == '2' || arr[i].charAt(0) == '5') {
    console.log(arr[i]);
    result.push(arr[i]);
  };  
};
console.log(result);*/

//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'.
/*let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('-'+ arr.join('-') + '-');*/

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным. 
/*let week = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
for (let i = 0; i < week.length; i++) { 
  if ( i == 5  || i == 6) {
    console.log('<strong>' + week[i] + '</strong>');
  } else {
    console.log(week[i]);
  }
};*/

//Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. 
//Текущий день должен храниться в переменной day.
/*let week = ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'];
let day = 'sun';
for (let i = 0; i < week.length; i++) {
  if (week[i] == day) {
    console.log('<i>' + week[i] + '</i>')
  } else {
    console.log(week[i]);
  };
};*/

//Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. 
//Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и 
//запишите его в переменную num.
/*let result = 1000;
let i = 0;
while (i<1000) {
  i++;
  result = result/2;
  if (result < 50) {
    break;
  }
}
console.log(result);
console.log(i);*/

//http://code.mu/tasks/javascript/base/rabota-s-matematicheskimi-funkciyami-v-javascript.html
