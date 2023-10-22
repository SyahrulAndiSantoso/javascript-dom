const p4 = document.createElement('p');
const teksP4 = document.createTextNode('Paragraf 4');
p4.appendChild(teksP4);
const sectionA = document.getElementById('a');
sectionA.appendChild(p4);
const P4 = sectionA.getElementsByTagName('p')[3];
P4.setAttribute('class','p4');

const li = document.createElement('li');
const teskLi = document.createTextNode('Item 4');
li.appendChild(teskLi);

const ul  = document.querySelector('ul');
ul.appendChild(li);