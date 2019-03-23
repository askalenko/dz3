

function getName(name) {
	const act = prompt('Как вас зовут?');
	if (act.match(/[а-я]/)) {
		let titleElem = document.getElementsByTagName('h1');
		res = titleElem.innerHTML ='Hello, ' + act;
		return res;
	} else {
		alert ('введите ваше имя кирилицей');
		return	getName();                                 
	}
}


const result = getName();
alert(result);


function addListCount() {
	const liCount = prompt('введите число от 0 - 100');
	if (!isNaN(liCount) && liCount > 0 && liCount <100 ) {
		var parentElem = document.body; //?
		const newList = document.createElement('ul');
		parentElem.appendChild(newList);
						
		for (var i = 1; i <= liCount; ++i) {
			let newLi = document.createElement('li');
			let contentLi = newLi.innerHTML = i;
			newList.appendChild(newLi);      			
		}
		return newList;
	} else {
		alert ('вы ыыели не число от 0 - 100 !!');
		return	addListCount();                                 
	}
}

addListCount();