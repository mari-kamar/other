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

//Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' с помощью глобального поиска и замены. 
/*let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));*/

//Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' тремя разными способами
/*let str = 'aaa bbb ccc';
console.log(str.substr(4, 3)); 
console.log(str.substring(4, 7)); 
console.log(str.slice(4, 7));*/

// В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
/*let data = '2025-12-31';
let arr = data.split('-');
console.log(arr);
let newData = arr[2] + '/' + arr[1] + '/' + arr[0];
console.log(newData);*/

//Дана строка 'js'. Сделайте из нее строку 'JS'.
/*let str = 'js';
console.log(str.toUpperCase());
console.log(str.toLowerCase());*/

//Дана строка 'я учу javascript!'. Найдите количество символов в этой строке. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (
/*let str = 'I learn javascript!';
console.log(str.length);
console.log(str.substr(2));
console.log(str.substring(2))
console.log(str.slice(2))
console.log(str);
console.log(str.indexOf('learn', 2));*/

//Дана переменная str, в которой хранится какой-либо текст. 
//Реализуйте обрезание длинного текста по следующему принципу: если количество символов 
//этого текста больше заданного в переменной n, то в переменную result запишем первые n 
//символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str
/*let str = 'It would be a good reason to sell this apartment, because it is far away from sea and I can not go there by walk every morning';
let n = 18;
let result;
console.log(str.length);
if (str.length>n) {
  result = str.slice(0, n) + '...';
} else {
  result = str;
}
console.log(result);*/

// Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
/*let str = 'I-learn-javascript';
console.log(str.replace(/-/g,'!'));*/

//Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
//Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
/*let str = 'I learn javascript';
let arr = str.split(' ');
let arrElem = str.split('');
console.log(arr);
console.log(arrElem);*/

//В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
/*let data = '2025-12-31';
let arr = data.split('-');
let newData = arr[2] + '.' + arr[1] + '.' + arr[0];
console.log(newData);*/

//Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
/*let arr = ['I', 'learn', 'javascript', '!'];
console.log(arr.join(' '));*/

//Преобразуйте первую букву строки в верхний регистр. Преобразуйте первую букву каждого слова строки в верхний регистр.
/*let str = 'i learn javascript';
let newStr = str.charAt(0).toUpperCase() + str.slice(1);
console.log(newStr);

function Capitalizer(someStr) {
  let arr = someStr.split(' ');

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  };

  let result = arr.join(' ');

  console.log(result);
}
Capitalizer('i want buy it');*/

//Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
/*function changeText(someText) {
  let arr = someText.split('_');
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (i>=1) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    } else {
      arr[i] = arr[i].toLowerCase();
    }
  }
  let result = arr.join('');
  console.log(result);
}

changeText('Var_test_text');*/

//Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
/*let arr1 = ['a', 'b', 'c'];
let arr2 = [1, 2, 3];
let result = arr1.concat(arr2);
console.log(result);*/

//Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
/*let arr1 = ['a', 'b', 'c'];
let arr2 = arr1.push(1, 2, 3);
console.log(arr1);*/

//Заполним массив числами от 1 до 10:
/*let arr = [];
for (let i = 1; i <=10; i++) {
  arr.push(i);
};
console.log(arr);*/

//Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
/*let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result = arr1.concat(arr2);
console.log(result);*/

//Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
/*let arr = [1, 2, 3];
console.log(arr.reverse());*/

//Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
/*let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);*/

//Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
/*let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);*/

//Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
/*let arr = ['js', 'css', 'jq'];
console.log(arr[0]);
console.log(arr[arr.length - 1]);
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);*/

//Пусть дан массив ['1', '2', '3', '4', '5', '6']. Давайте сделаем из него строку '16-25-34'.
/*let arr = ['1', '2', '3', '4', '5', '6'];
let result = [];

while(arr.length > 0) {
  let first = arr.shift();
  let last = arr.pop();
  let str = first + last;
  result.push(str);
}
console.log(result);
result = result.join('-');
console.log(result);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
/*let arr = [1, 2, 3, 4, 5];
let result = arr.slice(0,3);
console.log(result);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
/*let arr = [1, 2, 3, 4, 5];
let result = arr.slice(3);
console.log(result);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
/*let arr = [1, 2, 3, 4, 5];
let result = arr.splice(1,2);
console.log(result);
console.log(arr);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
/*let arr = [1, 2, 3, 4, 5];
let result = arr.splice(1,3);
console.log(result);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
/*let arr = [1, 2, 3, 4, 5];
arr.splice(2,0,'a', 'b', 'c');
console.log(arr);*/

//Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
/*let arr = [1, 2, 3, 4, 5];
arr.splice(1,0,'a','b');
console.log(arr);
arr.splice(6,0,'c');
console.log(arr);
console.log(arr.length);
arr.splice(arr.length,0,'e');
console.log(arr);*/

//Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
/*let arr = [3, 4, 1, 2, 7];
console.log(arr.sort());*/

//Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
/*let obj = {js:'test', jq: 'hello', css: 'world'};
console.log(obj);
console.log(Object.keys(obj));*/


//Дана строка. Сделайте заглавным первый символ этой строки не используя цикл. 
/*let str = 'something here';
console.log(str.charAt(0).toUpperCase() + str.slice(1));

let arr = str.split('');
arr[0] = arr[0].toUpperCase()
console.log(arr.join(''));*/

//Дана строка, например, '123456'. Переверните эту строку (сделайте из нее '654321') не используя цикл
/*let str = '123456';
let arr = str.split('');
arr.reverse();
let result = arr.join('');
console.log(arr);
console.log(result);*/

//Проверьте, что строка начинается на http://
/*let str = 'sf http:// check it starts';
let arr = str.split(' ');
console.log(arr);
if (arr[0] == 'http://') {
  console.log('the line starts from http://')
} else {
  console.log('write the right url')
};*/

//Проверьте, что строка заканчивается на .html
/*let str = 'file:///C:/Users/mgengalycheva/udemy_js/udemy/loops/index.html';
if (str.substr(-5) == '.html') {
  console.log('yes');
} else {
  console.log('no');
};*/

//Сделайте функцию, которая возвращает куб числа. Число передается параметром
/*function cube(num) {
  return num*num*num;
}
console.log(cube(2));
console.log(cube(4));*/

//Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
/*function square(num) {
  return num*num;
};
console.log(square(2));
console.log(square(3));*/

//Сделайте функцию, которая возвращает сумму двух чисел.
/*function sum(a,b) {
  return a+b;
};
console.log(sum(2,4));
console.log(sum(5,5));*/

//Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
/*function example(a,b,c) {
  return (a-b)/c;
};
console.log(example(5,2,3));*/

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

function getWeekDay(days) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
}


