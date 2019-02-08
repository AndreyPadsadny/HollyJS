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