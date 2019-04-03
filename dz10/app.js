



function calculator(generalArg) {
	// console.log('первый аргумент ' + generalArg);
	let newArg = 0;

	return {
		 add: function add(arg)  {
			  console.log('второй аргумент ' + arg);
				const res = generalArg + arg;
				// console.log('res= ' + res);
				return res;
		},
		sub: function sub(arg) {
			 console.log('второй аргумент ' + arg);
				const res = generalArg - arg;
				// console.log('res= ' + res);
				return res;
		},

		divide: function divide(arg) {
			 console.log('второй аргумент ' + arg);
				const res = generalArg / arg;
				// console.log('res= ' + res);
				return res;
		},

		mult: function mult(arg) {
			 console.log('второй аргумент ' + arg);
				const res = generalArg * arg;
				// console.log('res= ' + res);
				return res;
		},

		set: function set(arg) {
			 console.log('заменяем первый на ' + arg);


				newArg = arg;
				return newArg;
				// console.log('generalArg= ' + generalArg);
				// let setArg = calculator(arg);
				// let newArg = setArg.set;
				// return newArg;

		},

		get: function get(arg) {
			 console.log('текущий первый аргумент ' + newArg);
				// let generalArg = arg; 
				// console.log('res= ' + res);
				return newArg;
		}






	}
}

const value = calculator(10);


const sumResult = value.add(45);
console.log('сложение = ' + sumResult);

const subResult = value.sub(45) // возвращает -35
console.log('вычитание = ' + subResult);

const divideResult = value.divide(2);
console.log('деление = ' + divideResult);

const multResult = value.mult(5);
console.log('умножение = ' + multResult);

const setResult = value.set(100);
console.log('установим первый аргумент = ' + setResult);
// console.log('ТЕКУЩИЙ АРГУМЕНТ= '+ generalArg );


const checkResult = value.get();
console.log('проверяем аргумент = ' + checkResult);


const multResult2 = value.mult(5);
console.log('умножение2 = ' + multResult2);

// value.divide(5) // возвращает 2
// value.mult(5) // возвращает 50
// value.set(100) // устанавливает базовое значение в 100
// value.get() // возвращает базовое значение (в данный момент 100)

// value.mult(5) // возвращает 500



