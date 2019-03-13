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




// ПОДСКАЗКА

// let secondNumber = parseInt(prompt('Введите второе число'), 10);
// let result = calc(firstNumber, act, secondNumber) ;



function calculate(a,b,c) {
	if (validateNumber(operandA) && getAction(action) && validateNumber(operandB)) {              // && validateSymbol(act) && validateNumber(secondNumber)
		if (act == '+') {
			return calcSum(operandA, operandB)
		} else if (act == '-') {
			return calcSubtraction(operandA, operandB)
		} else if (act == '/') {
			return calcDivision(operandA, operandB)
		} else if (act == '*') {
			return calcMultiplication (operandA, operandB)
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




function getOperandA(x) {
	let firstNumber = parseInt(prompt('Введите первое число'), 0);
	validateNumber(firstNumber); 
	return firstNumber ;
}
function getOperandB(y) {
	let secondNumber = parseInt(prompt('Введите второе число'), 0);
	validateNumber(secondNumber); 
	return secondNumber ;
}

function validateNumber(num) {
	if (!isNaN(num)) {
		return  true;
	} else {
		alert ('Введите число')
	}
}

function getAction(act) {
	let act = prompt('Что нужно сделать? + - * /');
	if (act.match(/[\+\-\*\/]/)) {
		return true;
	} else {
		alert ('операция недоступна. введите один из этих символов + - * /')
	}
}



const operandA = getOperandA();
const action = getAction();
const operandB = getOperandB();

const result = calculate(operandA, operandB, action);

alert('Результат' + result);

