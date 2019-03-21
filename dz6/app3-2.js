// Написать функцию которая будет делать полную (с учетом вложенностей) копию объекта.

// Ожидаю что использовать ее можно будет так:

// const obj = {name: 'Alex', age: 33, adress: { country: 'UA', city: 'Dnipro}}
// const objCopy = copy(obj);


const obj = {
	name: 'Alex', 
	age: 33, 
	adress: { 
		country: 'UA',
		 city: 'Dnipro'
		},
	arr: [1,2],
	x: null,
	check: true,
	check2: undefined	
	}


function copy(obj) {
	 // const newObj = obj && Array.isArray(obj) ? [] : obj ? {} : obj;

	 let newObj;

	 	if (Array.isArray(obj)) {
	 		 newObj = []
	 	} else if (obj) {
	 		newObj = {}
	 	} else {
	 		newObj = obj;
	 	}

		for (let key in obj) {
			let value;

			if (typeof(obj[key]) === "object" ) {
	  			 	 value = copy(obj[key]);
	  		} else {
	  			 value = obj[key];
	  		}

	  		newObj[key] = value;
		}
	return newObj;
}


const objCopy = copy(obj);
console.log(objCopy);


