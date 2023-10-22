//document.getElementById()-> element
//document.getElementsByTagName-> html collection
//document.getElementsByClassName-> html Collection

//document.querySelector -> element
// const p4 = document.querySelector('#b p');
// p4.style.backgroundColor = 'black';
// p4.style.color = 'white';

// const li = document.querySelector('#b li:nth-child(2)');
// li.style.backgroundColor= 'grey';
// li.style.color='black';

// const p3 = document.querySelector('#a p');
// p3.style.backgroundColor = 'black';
// p3.style.color='white';

//document.querySelectorAll -> Nodelist
// const p3 = document.querySelectorAll('#a p')[2];
// p3.style.backgroundColor='black';
// p3.style.color='white';

// const p3 = document.querySelectorAll('#a p');
// p3[2].style.backgroundColor='black';
// p3[2].style.color='white';

//trick
// const sectionB = document.querySelector('#b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';
// p4.style.color = 'white';

const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.innerHTML ='Berhasil Diubah';


