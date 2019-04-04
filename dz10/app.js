


function calculator(generalArg) {

	return {
		add: function add(secondArg)  {
		  	console.log('второй аргумент ' + secondArg);
			const result = generalArg + secondArg;
			return result;
		},
		sub: function sub(secondArg) {
		 	console.log('второй аргумент ' + secondArg);
			const result = generalArg - secondArg;
			return result;
		},

		divide: function divide(secondArg) {
		 	console.log('второй аргумент ' + secondArg);
			const result = generalArg / secondArg;
			return result;
		},

		mult: function mult(secondArg) {
		 	console.log('второй аргумент ' + secondArg);
			const result = generalArg * secondArg;
			return result;
		},

		set: function set(secondArg) {
		 	console.log('заменяем первый на ' + secondArg);
			generalArg = secondArg;
			return generalArg;
		},

		get: function get() {
		 	console.log('текущий первый аргумент ' + generalArg);
			return generalArg;
		}

	}
}

const value = calculator(10);


const sumResult = value.add(45);
console.log('сложение = ' + sumResult);

const subResult = value.sub(45) 
console.log('вычитание = ' + subResult);

const divideResult = value.divide(2);
console.log('деление = ' + divideResult);

const multResult = value.mult(5);
console.log('умножение = ' + multResult);

const setResult = value.set(100);
console.log('установим первый аргумент = ' + setResult);


const checkResult = value.get();
console.log('проверяем аргумент = ' + checkResult);


const multResult2 = value.mult(5);
console.log('умножение2 = ' + multResult2);




