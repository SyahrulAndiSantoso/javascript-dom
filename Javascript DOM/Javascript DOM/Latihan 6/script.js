//Contoh EVENTHENDLER
const p3 = document.querySelector('.p3');

// function ubah()
// {
//     p3.style.color = 'lightblue';
//     p3.style.backgroundColor = 'grey';
// }

// p3.onclick=ubah;

// p3.onclick = function()
// {
//     p3.style.color = 'lightblue';
//     p3.style.backgroundColor = 'grey';
// }

//Contoh EventListener
const p4 = document.querySelector('section#b p');
// p4.addEventListener('click',function(){
//     p4.style.color = 'blue';
// });

// p4.addEventListener('click',function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru= document.createElement('li');
//     const teksBaru=document.createTextNode('Item Baru');
//     liBaru.appendChild(teksBaru);
//     ul.appendChild(liBaru);
// });

//perbedaan eventhendler dengan eventlistener
//ketika menggunakan 2 eventheandler yang sama maka yg dikerjakan 1 yaitu yang terakhir
//karena datanya ditindih
//contoh :
// p4.onclick = function(){
//     p4.style.backgroundColor = 'grey';
// }

// p4.onclick = function(){
//     p4.style.color = 'blue';
// }


//ketika menggunakan 2 eventlistener yg sama maka semuanya dikerjakan
//contoh
// p4.addEventListener('click',function(){
//     p4.style.color='blue';
// });

// p4.addEventListener('click',function(){
//     p4.style.backgroundColor='grey';
// });

const input = document.querySelector('section#b input');
input.addEventListener('keyup',function(){
    const ul = document.querySelector('section#b ul');
        const liBaru= document.createElement('li');
        const teksBaru=document.createTextNode('Item Baru');
        liBaru.appendChild(teksBaru);
        ul.appendChild(liBaru);
});