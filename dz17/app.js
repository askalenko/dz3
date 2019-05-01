class Users{
constructor (table) {    
  this.table = table.getElementsByTagName('tbody')[0]; 				
  this.request('get', 'https://jsonplaceholder.typicode.com/users', (resp) => this.fillTable(resp)); 
}
//запрос 
request = function() {
    var xhr = new XMLHttpRequest();
    return function( method, url, callback ) {
        xhr.onload = function() {
            callback( JSON.parse(xhr.responseText));
        };
        xhr.open( method, url );
        xhr.send();
    };
}();

fillTable(resp) {
	const sortedList = resp.map((i) => {   		//коллекция для хранения записей вида ключ:значение.
	//Функция Object.assign получает список объектов и копирует в первый target свойства из остальных.
  	return Object.assign({}, {id: i.id, name: i.name, phone: i.phone, email: i.email});
  });
  for (let element of sortedList) {  	//перебор итерируемого объекта sortedList
    let row = this.table.insertRow();   //The HTMLTableElement.insertRow() method inserts a new row (<tr>) in a given <table>, and returns a reference to the new row.
    row.setAttribute('data-user-id', element.id); // 
    row.addEventListener('click', () => this.fetchUserRecords(element)); 
    for (let key in element) {  //перебор всех свойств из объекта по свойствам
    if (key !== 'id') { 
    	let cell = row.insertCell();
      	let text = document.createTextNode(element[key]);
      	cell.appendChild(text);
    }
    }
  }
}

fetchUserRecords(element) {
	this.request('get', `https://jsonplaceholder.typicode.com/posts?userId=${element.id}`, (resp)=> 	{
      console.log('resp', resp);
});
}
}


const usersList = new Users(
    document.getElementById('usersListTable')
    
);