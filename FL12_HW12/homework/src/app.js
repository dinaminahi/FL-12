const mainPage = document.getElementById('main-page');
const addPage = document.getElementById('add-page');
const list = document.querySelector('.sets');
const setDescription = document.getElementById('set-description');
addPage.style.display = 'none';
function addSet() {
  location.hash = '#/add';
  mainPage.style.display = 'none';
  addPage.style.display = 'block';
}

function addTerm() {
  let term = document.createElement('input');
  term.setAttribute('placeholder','Enter term');
  term.setAttribute('id','term');
  let description = document.createElement('input');
  description.setAttribute('placeholder','Enter description');
  description.setAttribute('id','description');
  let remove = document.createElement('button');
  remove.innerText = 'X';
  remove.setAttribute('id','remove-btn');
  remove.setAttribute('onclick', 'removeTerm()');
  setDescription.appendChild(term);
  setDescription.appendChild(description);
  setDescription.appendChild(remove);
}

function saveSet() {
  let name = document.getElementById('nameOfSet').value;
  let child = document.createElement('h1');
  child.innerText = `${name}`;
  mainPage.appendChild(child);
  mainPage.style.display = 'block';
  addPage.style.display = 'none';
}

function removeTerm() {
  setDescription.removeChild(document.getElementById('term'));
  setDescription.removeChild(document.getElementById('description'));
  setDescription.removeChild(document.getElementById('remove-btn'));
}

function cancelAdding() {
  location.hash = '';
  mainPage.style.display = 'block';
  addPage.style.display = 'none';
}
