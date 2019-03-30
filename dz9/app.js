const addContactBtn = document.getElementById("addContactBtn"); 
const conactsLIst = document.getElementById("conactsList"); 
const contactNameInput = document.getElementById("nameInput");
const contactPhoneInput = document.getElementById("phoneInput"); 
const contactAgeInput = document.getElementById("ageInput");  
const contactTemplate =  document.getElementById("contactTemplate").innerHTML;  


const contactsList = document.getElementById("contactsList");

addContactBtn.addEventListener ('click', onAddContactBtnClick);

function onAddContactBtnClick() {
	submitContact();
}

function submitContact() {
	const contact = {
		name: contactNameInput.value,
		phone: contactPhoneInput.value,
		age: contactAgeInput.value,
		// delete: deleteContactBtn.value,
	}
	addContact(contact);
	resetContactForm();
}

function addContact(contact) {
	const contactTr = document.createElement('tr');		

	contactTr.innerHTML = contactTemplate
								.replace('{{name}}', contact.name || '-')
								.replace('{{phone}}', contact.phone || '-')
								.replace('{{age}}', contact.age || '-')
								.replace('{{delete}}', '<input type="button" id="deleteContactBtn" value="Delete">'); //почему не срабатывает если deleteContactBtn

	contactsList.appendChild(contactTr);
	// console.log(contact);
	// resetContactForm();

}

function resetContactForm() {
		contactNameInput.value = '';
		contactPhoneInput.value = '';
		contactAgeInput.value = '';
		// deleteContactBtn.remove(deleteContactBtn.parentNode);
}


addContact({name:"Alex", phone: '111'});





contactsList.addEventListener ('click', onDeleteContactBtnClick);

function onDeleteContactBtnClick(event) {
	// contactsList.target.onclick
	const deleteContactBtn  = event.target;
	deleteContactBtn.onclick = function(event) {
    	
		const dltParent = deleteContactBtn.parentNode;
		const dltTr = dltParent.parentNode;
		console.log(dltTr);
		dltTr.remove(dltTr.parentNode);
  }
	
	
	
}
	
