const mainPage = document.getElementById('main-page');
const addPage = document.getElementById('add-page');
const list = document.querySelector('.sets');
addPage.style.display = 'none';
function addSet() {
  location.hash = '#/add';
  mainPage.style.display = 'none';
  addPage.style.display = 'block';

}

function saveSet() {
  let name = document.getElementById('nameOfSet').value;
  let child = document.createElement('h1');
  child.innerText = `${name}`;
  mainPage.appendChild(child);
  mainPage.style.display = 'block';
  addPage.style.display = 'none';
}
