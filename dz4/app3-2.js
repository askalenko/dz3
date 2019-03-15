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




// function calculate(firstNumber, secondNumber, operationSymbol) {
// 	// if (getOperand(operandA)  && getOperand(operandB) && getAction(action)) {              // && validateSymbol(act) && validateNumber(secondNumber)
// 		if (operationSymbol == '+') {
// 			return calcSum(operandA, operandB)
// 		} else if (operationSymbol == '-') {
// 			return calcSubtraction(operandA, operandB)
// 		} else if (operationSymbol == '/') {
// 			return calcDivision(operandA, operandB)
// 		} else if (operationSymbol == '*') {
// 			return calcMultiplication (operandA, operandB)
// 		} else {
// 		return 'somthing wrong';
// 	}	
// }


function calculate(firstNumber, secondNumber, operationSymbol) {
switch (operationSymbol) {
	case  '+': 
		return calcSum(operandA, operandB);
		break;
	case '-': 
		return calcSubtraction(operandA, operandB);	
		break;
	case '/': 
		return calcDivision(operandA, operandB);
		break;
	case '/': 
		return calcMultiplication (operandA, operandB);
		break;	
}
}



function calcSum(a, b) {
	let sumResult = a + b;
	return sumResult;
}
function calcSubtraction(a, b) {
	let subResult = a - b;
	return subResult;
}
function calcDivision(a, b) {
	let divResult = a / b;
	return divResult;
}
function calcMultiplication(a, b) {
	let mulResult = a * b;
	return mulResult;
}

function getOperand(validNumber) {
	let someNumber = parseInt(prompt('Введите число'), 0);   //лучше не использовать parsseInt - не сработает для дробных
	if (!isNaN(someNumber))  {                               //isNaN или !isNaN   ????????
		return someNumber;
	} else {
		alert ('Вы ввели не число')
		 getOperand();										//если здесь будет  getOperand(someNumber) - я сюда опять передам то число которое не прошло валидацию или новое? 
	}
}


function getAction(actionSymbol) {
	let act = prompt('Что нужно сделать? + - * /');
	if (act.match(/[\+\-\*\/]/)) {
		return act;
	} else {
		alert ('операция недоступна. введите один из этих символов + - * /')
		return	getAction();                                 //здесь надо преедавать act или () ?????? 
	}
}


const operandA = getOperand();
const action = getAction();
const operandB = getOperand();

const result = calculate(operandA, operandB, action);


alert('Результат' + result);

