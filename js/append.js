// 1. Where to add...
const placesList = document.getElementById('places-list');
// 2. what to be added..
const li = document.createElement('li');
li.innerText = 'Pahartoli Ban';
// 3. Add the child..
placesList.appendChild(li);

// innerText......
const mainContainer = document.getElementById('main-container');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Borhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Salad';
ul.appendChild(li3);

section.appendChild(ul);
mainContainer.appendChild(section);

// innerHTML......
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Derss Scetion</h1>
<ul>
    <li>Shirt</li>
    <li>T-shirt</li>
    <li>Pant</li>
</ul>
`;
mainContainer.appendChild(sectionDress);