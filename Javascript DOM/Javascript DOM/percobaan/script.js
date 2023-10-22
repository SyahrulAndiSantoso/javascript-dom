const button = document.querySelector('.tambah');
const card = document.querySelector('.card');
var anggota =1;
var index = 0;
button.addEventListener('click',function(){
    const carD = document.createElement('div');
    carD.classList.add('card');
    carD.classList.add('mt-5');

    const card_body = document.createElement('div');
    card_body.setAttribute('class','card-body');

    const buttonDelete = document.createElement('button');
    const buttonText = document.createTextNode('Hapus');
    buttonDelete.appendChild(buttonText);
    buttonDelete.classList.add('btn');
    buttonDelete.classList.add('btn-danger');
    buttonDelete.classList.add('hapus');
    card_body.appendChild(buttonDelete);

    const h6 = document.createElement('h6');
    const textH6 = document.createTextNode(`Anggota Ke ${++anggota}`);
    h6.appendChild(textH6);
    h6.classList.add('float-right');
    card_body.appendChild(h6);

    const form = document.createElement('from');

    const form_group = document.createElement('div');
    form_group.classList.add('from-group');

    const label = document.createElement('label');
    const label_teks = document.createTextNode('Email Address');
    label.appendChild(label_teks);

    const input = document.createElement('input');
    input.setAttribute('type','email');
    input.setAttribute('class','form-control');
    form_group.appendChild(label);
    form_group.appendChild(input);

    const labell = document.createElement('label');
    const labell_teks = document.createTextNode('Password');
    labell.appendChild(labell_teks);
    form_group.appendChild(labell);

    const inputt = document.createElement('input');
    inputt.setAttribute('type','password');
    inputt.setAttribute('class','form-control');
    form_group.appendChild(inputt);

   form.appendChild(form_group);
    card_body.appendChild(form);
    carD.appendChild(card_body);
    // card.after(carD);
    const container = document.querySelector('.container');
    container.appendChild(carD);

    const btnD = document.querySelectorAll('.hapus');
//     btnD.forEach(function(btn){
//         btn.addEventListener('click',function(){
//             btn.parentElement.parentElement.style.display='none';
//             console.log(anggota);
//             anggota =  Math.round(anggota-1);
//             document.querySelector('.anggota').innerHTML = anggota;
//    document.querySelector('.harga').innerHTML = anggota*30000;
//         });
//     });

 
   document.querySelector('.anggota').innerHTML = anggota;
   document.querySelector('.harga').innerHTML = anggota*30000;
});


const container = document.querySelector('.container');
container.addEventListener('click',function(e){

    if(e.target.className == 'hapus'){
        console.log(e.target);
    }
//     if(e.target.className == 'btn-danger'){
//         e.target.parentElement.parentElement.style.display = 'none';
//         anggota =  anggota-1;
//         document.querySelector('.anggota').innerHTML = anggota;
// document.querySelector('.harga').innerHTML = anggota*30000;
// console.log(anggota);
//     }
});