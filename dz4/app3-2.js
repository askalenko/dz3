// ЗАДАЧА
// Калькулятор
// реализовать калькулятор который последовательно у пользователя спросит
// - первый операнд
// - действие (+ - / *)
// - второй операнд

// после этого выводим результат операции

// все спрашиваем у пользователя с помощью prompt, обязательно валидируем введенные значения, переспрашиваем, если введенное не валидно.

// получение/валидация операнда, получение/валидация действия, собственно вычисление, все должно быть в отдельных функциях.



// ПОДСКАЗКА

/****

Тут будет ваш код


***/

// const operandA = getOperand(‘первый’);
// const operandB = getOperand(‘второй’);
// const action = getAction();
// const result = calculate(operandA, operandB, action)

// alert(‘Результат: ’ + result);

// function getOperand(text) {

// }


// ПОДСКАЗКА







let firstNumber = parseInt(prompt('Введите первое число'), 10);
let act = prompt('Что нужно сделать? + - * /');
let secondNumber = parseInt(prompt('Введите второе число'), 10);
let result = calc(firstNumber, act, secondNumber) ;

alert('Результат' + result);

function calc(a,b,c) {
	if (validateNumber(firstNumber) && validateSymbol(act) && validateNumber(secondNumber)) {              // && validateSymbol(act) && validateNumber(secondNumber)
		if (act == '+') {
			return calcSum(firstNumber, secondNumber)
		} else if (act == '-') {
			return calcSubtraction(firstNumber, secondNumber)
		} else if (act == '/') {
			return calcDivision(firstNumber, secondNumber)
		} else if (act == '*') {
			return calcMultiplication (firstNumber, secondNumber)
		}
	} else {
		return '(((';
	}	
}






function calcSum(a, b) {
	sumResult = a + b;
	return sumResult;
}
function calcSubtraction(a, b) {
	subResult = a - b;
	return subResult;
}
function calcDivision(a, b) {
	divResult = a / b;
	return divResult;
}
function calcMultiplication(a, b) {
	mulResult = a * b;
	return mulResult;
}



function validateNumber(num) {
	if (!isNaN(num)) {
		return  true;
	} else {
		alert ('Введите число')
	}
}

function validateSymbol(symbol) {

	if (symbol.match(/[\+\-\*\/]/)) {
		return true;
	} else {
		alert ('операция недоступна. введите один из этих символов + - * /')
	}
}



