//document.getElementById -> element
const judul = document.getElementById('judul');
judul.style.color='white';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Syahrul Riza Andi S';

//document.getElementsByTagsName -> HTML Collection
const p = document.getElementsByTagName('p')[0];
// for(let i=0;i<p.length;i++){
//     p[i].style.color='red';
// }
p.style.color='red';

//document.getElementsByClassName -> HTML Collection
const p1 = document.getElementsByClassName('p1')[0];
p1.style.fontSize = '30px';
p1.innerHTML = 'Halo Kawan';

const ul = document.getElementsByTagName('ul')[0];
const li = ul.getElementsByTagName('li')[1];
li.style.color = 'red';
li.innerHTML = 'Cuy';