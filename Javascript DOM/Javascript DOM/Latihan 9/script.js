// const card = document.querySelector('.card');
// const close = document.querySelector('.card .close');
// close.addEventListener('click',function(){
//     card.style.display = 'none';
// });

// const card = document.querySelectorAll('.card');
// const close = document.querySelectorAll('.close');

// for(let i=0;i<close.length;i++){
//     close[i].addEventListener('click',function(){
//         card[i].style.display = 'none';
//     });
// }



//dom Transversal
// const card = document.querySelectorAll('.card');
// const close = document.querySelectorAll('.close');

// for(let i=0;i<close.length;i++){
//     close[i].addEventListener('click',function(event){
//         event.parentElement.style.display = 'none';
//     });
// }


const card = document.querySelectorAll('.card');
const close = document.querySelectorAll('.close');
close.forEach(function(cls) {
    cls.addEventListener('click',function(){
        cls.parentElement.style.backgroundColor = 'yellow';
    });
});

// const nama = document.querySelector('.nama');
// console.log(nama.parentElement); -> element
// console.log(nama.parentNode); -> node
// console.log(nama.nextElementSibling); -> saudara menghasilkan element
// console.log(nama.nextSibling); -> saudara
// console.log(nama.previousElementSibling); -> saudara menghasilkan elemnt
// console.log(nama.previousSibling); -> saudara