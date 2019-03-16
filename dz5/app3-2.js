




function getNumber(validNumber) {
	let someNumber = prompt('Введите число');   
	if (!isNaN(someNumber))  {                               
		return isNumberEven(someNumber);
		// return quantityEvenNumber;
	} else {
		alert ('Вы ввели не число')
		 getNumber();										
	}
	console.log(quantityEvenNumber);
	return quantityEvenNumber;
}


function isNumberEven(numString) {
	// let comma = ',';
	// console.log(comma);
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


