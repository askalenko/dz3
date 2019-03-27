
function addLi(){
	const newList = document.getElementsByTagName('ul')[0];
	let newLi = document.createElement('li');
	newList.appendChild(newLi);    
}

const input = document.getElementsByTagName('input')[0];
input.addEventListener('click', addLi );






const newList = document.querySelector('ul');
newList.addEventListener('click', colorLi );


function colorLi() {
		event.target.style.background = event.target.style.background === 'yellow' ?'red':'yellow';
			//прекратить всплытие чтобы не закрашивался UL?   
      }





const li = document.querySelector('li');
li.addEventListener('click', deleteLi)

function deleteLi() {
	let altKeyPressed = event.altKey;
	alert(altKeyPressed);
	if (altKeyPressed === true) {
		this.remove();
	} 

		
}

