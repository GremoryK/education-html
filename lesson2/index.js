var a, b; // create variable
a = 3;
b = "31-ф1";
console.log(a); //display in console value
console.log(typeof(a)); //display in console type of value
console.log(typeof(b));
var c = a ** b; // sqrt
console.log(c);

console.log(a==b); // сравнение значенией
console.log(a===b); // сраынение значений и типов данных

parseInt(b); // явное преобразование в число
console.log(parseInt(b));

var d = "n"; // пустая строка
var e = null;
console.log(d==e);

(a==b) ? console.log(1) : console.log(0); // тернарный оператор

const person = {name: "Tom", age: 37};
for(prop in person){
    console.log(prop, person[prop]); //вывод по аттрибутам и значениям аттрибутов
}

const text = "Hello";
for(char of text){
    console.log(char); //вывод по символам строки
}

const numbers = [5, 3, 6, 2, 5, 1];
console.log(numbers.length); // количество элементов в массиве
console.log(numbers[numbers.length-1]); // вывод последнего элемента массива

try { // обработчик ошибок
    const contacts = "Email: mycomp@gmail.com  Phones: +1-234-567-8901 and +1-234-567-8902";
    const phonePattern = /\+\d-\d{3}-\d{3}-\d{4}/; //валидация
    const result = phonePattern.exec(contacts);
    console.log(result);
}
catch(err) {
    console.log(err);
}

const contacts2 = "Email: mycomp@gmail.com Phones: +1-234-567-8901 and +1-234-567-8902";
const phonePattern2 = /\+\d-\d{3}-\d{3}-\d{4}/g;
let result2;
while ((result2 = phonePattern2.exec(contacts2)) !== null){
    console.log("Phone number:", result2[0]);
    console.log("Index: ", result2.index);
}