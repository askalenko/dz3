

// TASK 1 

alert("ЗАДАЧА 1");


function getNumber() {
	let someNumber = prompt('Введите число');   
	if (!isNaN(someNumber))  {                               
		 let res = countEvenNumbers(someNumber);
		 console.log(res);
		 return res;
	} else {
		alert ('Вы ввели не число')
		 getNumber();										
	}
}


function countEvenNumbers(numString) {
	let arrNumString = numString.split('');
	let quantityEvenNumber = 0;
	 for (let i = 0; i <= arrNumString.length; i++) {
	  if (arrNumString[i] % 2 == 0) {
	     quantityEvenNumber ++;	
	  } else {
	  	 quantityEvenNumber += 0 ;
	  } 
	}
	return quantityEvenNumber; 
}

let result = getNumber();
alert('В введенном числе ' + result + ' четных чисел');




// __________________________________________________________________

// _________________________TASK 2__________________________________

// __________________________________________________________________

alert("ЗАДАЧА 2");

const minIntervalNumber = 1000;
const maxIntervalNumber = 2000;



function randomNumber(min, max) {
    let rand = min + Math.random() * (max - min + 1)   //разобраться в логике работы 
    rand = Math.round(rand);
    return rand;
  }


function largeNumber(firstNumber, secondNumber) {
	let firstRandomNumber = randomNumber(minIntervalNumber, maxIntervalNumber );
	let secondRandomNumber = randomNumber(minIntervalNumber, maxIntervalNumber);
	let maxNum = Math.max(firstRandomNumber, secondRandomNumber);
	return maxNum;
}

let result2 = largeNumber();

alert('наибольшее число из друх рандомных из 1000 и 2000 : ' + result2);

