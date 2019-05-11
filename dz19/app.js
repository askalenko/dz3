const API_URL = 'https://fep-app.herokuapp.com/api/contacts';
const contactsList = document.getElementById('contactsList');
const contactTemplate = document.getElementById('contactTemplate').innerHTML;
let contacts = [];

function fetchContacts(url) {
	return fetch(url)
  .then(resp => resp.json())
  .then(setData)
  .then(renderToDos)
  .then(addListeners);
}

function setData(data) {
	contacts = data;
  return contacts;
}

function renderToDos(data) {
contactsList.innerHTML = data.map((el) => {
  console.log('el', el);
        return contactTemplate
            .replace('{{id}}', el.id)
            .replace('{{name}}', el.name)
            .replace('{{phone}}', el.phone)
            .replace('{{class}}', el.is_active ? 'active' : 'not-active')
            .replace('{{status}}', el.is_active ? 'active' : 'blocked')
    }).join('\n');
return contactsList;
}

function changeStatus(id) {
  console.log('click');
  let obj;
  const result = contacts.filter((el) => el.id === id);
  if (result.length) {
    obj = result[0];
    obj.is_active = !obj.is_active;
  }
  return fetch(`${API_URL}/${id}`, {
    method: "PUT",
    body: JSON.stringify(obj),
  })
  .then(() => id)
  .then(changeLocalData);
}

function changeLocalData(id) {
  contacts = contacts.map((el) => {
    if (el.id === id) {
      el.is_active = !el.is_active;
    }
    return el;
  });
  console.log('changed contacts', contacts);
  return contacts;
}

function addListeners() {
  contacts.forEach((el) => {
    console.log('el id', el.id);
    const domElement = document.getElementById(el.id);
    console.log('dom el', domElement);
    domElement.addEventListener('click', changeStatus(el.id));
  })
}

fetchContacts(API_URL);


