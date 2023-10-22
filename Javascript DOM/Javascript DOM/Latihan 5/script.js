const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Paragraf Baru');
pBaru.appendChild(teksBaru);

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teks = document.createTextNode('List Baru');
liBaru.appendChild(teks);
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru,li2);

const link = sectionA.querySelector('a');
sectionA.removeChild(link);


// const sectionB = document.getElementById('b');
// const h2 = document.createElement('h2');
// h2.appendChild(teksBaru);
// const p4 = sectionB.querySelector('p');

// sectionB.replaceChild(h2,p4);
