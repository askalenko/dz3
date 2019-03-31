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
	}
	addContact(contact);
	resetContactForm();
}

function addContact(contact) {
	const contactTr = document.createElement('tr');		

	contactTr.innerHTML = contactTemplate
								.replace('{{name}}', contact.name || '-')
								.replace('{{phone}}', contact.phone || '-')
								.replace('{{age}}', contact.age || '-');	

	contactsList.appendChild(contactTr);


}

function resetContactForm() {
		contactNameInput.value = '';
		contactPhoneInput.value = '';
		contactAgeInput.value = '';

}


addContact({name:"Alex", phone: '111'});


contactsList.addEventListener ('click', onDeleteContactBtnClick);


function onDeleteContactBtnClick(event) {
const target = event.target;
const deleteContactBtn = document.getElementsByClassName("deleteContactBtn")[0]; //как избежать постоянного обращения
	if (target.className == "deleteContactBtn") {
		const dltParent = deleteContactBtn.parentNode;
		const dltTr = dltParent.parentNode;
		dltTr.remove(dltTr.parentNode);
	} else {
		// alert ('false')
	}
}


