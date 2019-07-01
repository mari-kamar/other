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
//Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b 
/*
let a = 10;
let b = 3;
console.log(a%b);*/

//Даны переменные a и b. Проверьте, что a делится без остатка на b. 
//Если это так - выведите 'Делится' и результат деления, иначе выведите 'Делится с остатком' и остаток от деления
/*let a;
let b;
function mod(a,b) {
  if (a%b == 0) {
    console.log('no mod')
  } else {
    console.log(a%b);
  };
};
mod(10,3);
mod(10,10);*/

//Возведите 2 в 10 степень. Результат запишите в переменную st.
/*let str;
str = Math.pow(2,10);
console.log(str);*/

//Найдите квадратный корень из 245.
/*let str = Math.sqrt(245);
console.log(str);*/

//Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. 
//Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
/*let arr = [4, 2, 5, 19, 13, 0, 10];
let str = [];
let sum = 0;
let result;
for (let i=0; i<arr.length; i++) {
  str.push(Math.pow(arr[i], 3));
  sum += str[i];
}
result = Math.sqrt(sum);
console.log(str);
console.log(sum);
console.log(result);*/

//Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.
/*let str = Math.sqrt(379);
console.log(str);
console.log(Math.round(str));*/

//Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, 
//запишите результаты округления в объект с ключами 'floor' и 'ceil'.
/*let str = Math.sqrt(587);
let floor = Math.floor(str);
let ceil = Math.ceil(str);
console.log(str);
console.log(floor);
console.log(ceil);*/

//Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число. 
/*let arr = [4, -2, 5, 19, -130, 0, 10];
let max = Math.max.apply(null, arr);
let min = Math.min.apply(null, arr);
console.log(max);
console.log(min);*/

//Выведите на экран случайное целое число от 1 до 100. 
/*function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
};
console.log(getRandomNum(1, 100));*/

//Заполните массив 10-ю случайными целыми числами. (Подсказка: нужно воспользоваться циклами for или while). 
/*let arr = [];
while (arr.length<10) {
  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max-min) + min);
  }
  arr.push(getRandomNum(1,100));
};
console.log(arr);*/

//Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.

//Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c. Сделайте так, чтобы в любом случае в переменную 
//c записалось положительное значение. Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

//Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
/*let arr = [12, 15, 20, 25, 59, 79];
let sum = 0;
for (let i = 0; i<arr.length; i++) {
  sum += arr[i] 
};
console.log(sum);
console.log(sum/arr.length);
*/


//Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - 
//это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.
/*
function factorial(n) {
  return (n != 1) ? n*factorial(n-1) : 1;
}
console.log(factorial(5));*/





