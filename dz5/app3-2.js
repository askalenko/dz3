

// TASK 1 

alert("ЗАДАЧА 1");


function getNumber(validNumber) {
	let someNumber = prompt('Введите число');   
	if (!isNaN(someNumber))  {                               
		return isNumberEven(someNumber);
		return quantityEvenNumber;
	} else {
		alert ('Вы ввели не число')
		 getNumber();										
	}
	console.log(quantityEvenNumber);
	return quantityEvenNumber;
}


function isNumberEven(numString) {
	let arrNumString = numString.split('');
	console.log(arrNumString);
	 for (var i = 0; i <= arrNumString[i]; i++) {
	 	// console.log(arrNumString[i]);
	  if (arrNumString[i] % 2 == 0) {
	  	// console.log(arrNumString[i]);
	    let quantityEvenNumber =+ 1;
	    	console.log('четное: ' + quantityEvenNumber);
	    	return quantityEvenNumber;
	  } else {
	  	 let quantityEvenNumber =+ 0 ;
	  	 console.log('не четное ' + quantityEvenNumber); 
	  	 // return quantityEvenNumber;
	  } 
	} 	
	return quantityEvenNumber;
}

let result = getNumber();


alert('В введенном числе ' + quantityEvenNumber + 'четных чисел');




// __________________________________________________________________

// _________________________TASK 2__________________________________

// __________________________________________________________________

alert("ЗАДАЧА 2");

const minIntervalNumber = 1000;
const maxIntervalNumber = 2000;



function randomNumber(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)   //разобраться в логике работы 
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



// alert(maxNum);
