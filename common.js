// Создать Calculator при помощи конструктора
// Напишите функцию-конструктор Calculator, которая создает объект с тремя методами:
// Метод read() запрашивает два значения при помощи prompt и запоминает их в свойствах объекта.
// Метод sum() возвращает сумму запомненных свойств.
// Метод mul() возвращает произведение запомненных свойств.

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt("vvedite a", 0);
//         this.b = +prompt("vvedite b", 0);
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };
//     this.mul = function() {
//         return this.a * this.b;
//     };
// }

// let calculator = new Calculator();
// calculator.read();
// console.log("suuma=" + calculator.sum());
// console.log("proizvedenie=" + calculator.mul());

// function Calculator() {
// 	this.read = () => {
// 			this.a = +prompt("vvedite a", 0);
// 			this.b = +prompt("vvedite b", 0);
// 	};
// 	this.sum = () => this.a + this.b;

// 	this.mul = () => this.a * this.b;
// }

// let calculator = new Calculator();
// calculator.read();
// console.log("suuma=" + calculator.sum());
// console.log("proizvedenie=" + calculator.mul());

// Напишите функцию-конструктор Accumulator(startingValue).
// Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

// function Acomulator(FirstValue) {
// 	this.value = FirstValue;
// 		this.read = () => {
// 			this.value += +prompt("vvedite chislo" ,0);
// 		}
// }
// let accum = new Acomulator(1);
// accum.read();
// console.log(accum.value);

// Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:
// Имя и фамилия всегда разделяются пробелом.
// Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись, вот так:

// 'use strict'
// function User(fullName) {
//   this.fullName = fullName;


// 	Object.defineProperty(this, "firstName" ,{
// 		get: function() {
// 			return this.fullName.split(" ")[0];
// 		},

// 		set: function(value) {
// 			this.firstName = value;
// 		}
// 	});

// 		Object.defineProperty(this, "lastName" ,{
// 		get: function() {
// 			return this.fullName.split(" ")[1];
// 		},

// 		set: function(value) {
// 			this.lastName = value;
// 		}
// 	});

// }

// var vasya = new User("Василий Пупкин");
// console.log(vasya.lastName)

//число фибоначчи
// function fib (n) {
// 	let res;
// 	if (n>=2) {
// 			return res=fib(n-1)+fib(n-2);
// 	}
// 	else {
// 			return n;
// 	}
// }
// console.log(fib(6));

//факториал рекурсивно
// function factorial (n) {
// 	if (n != 1) {
// 		return n * factorial(n-1);
// 	}
// 	return 1;
// }

// console.log(factorial(5));