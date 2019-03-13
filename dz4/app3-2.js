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




function calculate(a,b,c) {
	if (getOperand(operandA)  && getOperand(operandB) && getAction(action)) {              // && validateSymbol(act) && validateNumber(secondNumber)
		if (action == '+') {
			return calcSum(operandA, operandB)
		} else if (action == '-') {
			return calcSubtraction(operandA, operandB)
		} else if (action == '/') {
			return calcDivision(operandA, operandB)
		} else if (action == '*') {
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

function getOperand(ff) {
	let chislo = parseInt(prompt('Введите число'), 0);
	if (!isNaN(chislo))  {
		return chislo;
	} else {
		alert ('Вы ввели не число')
		 getOperand(chislo);
	}
	// return getOperand(x) ;
}


function getAction(bb) {
	let act = prompt('Что нужно сделать? + - * /');
	if (act.match(/[\+\-\*\/]/)) {
		return act;
	} else {
		alert ('операция недоступна. введите один из этих символов + - * /')
	}
}


const operandA = getOperand();
const action = getAction();
const operandB = getOperand();

const result = calculate(operandA, operandB, action);


alert('Результат' + result);

