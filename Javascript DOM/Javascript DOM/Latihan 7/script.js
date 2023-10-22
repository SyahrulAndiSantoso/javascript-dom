
const ubahWarna = document.getElementById('ubahWarna');
ubahWarna.addEventListener('click',function(){
    // document.body.style.backgroundColor = 'lightseagreen';
    document.body.classList.toggle('hijau-muda');
});


//studi kasus 2
const acakWarna = document.createElement('button');
const teks = document.createTextNode('Acak Warna');
acakWarna.appendChild(teks);
acakWarna.setAttribute('type','button');
ubahWarna.after(acakWarna);

acakWarna.addEventListener('click',function(){
    var r = Math.round(Math.random()*255+1);
var g =  Math.round(Math.random()*255+1);
var b =  Math.round(Math.random()*255+1);
    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});

const merah = document.querySelector('input[name=merah]');
const hijau = document.querySelector('input[name=hijau]');
const biru = document.querySelector('input[name=biru]');
const gantiWarna = document.getElementById('gantiWarna');
merah.addEventListener('input',function(){
    document.body.style.backgroundColor = `rgb(${merah.value},${hijau.value},${biru.value})`;
    document.getElementById('rgb').innerHTML = `rgb(${merah.value},${hijau.value},${biru.value})`;
});
hijau.addEventListener('input',function(){
    document.body.style.backgroundColor = `rgb(${merah.value},${hijau.value},${biru.value})`;
    document.getElementById('rgb').innerHTML = `rgb(${merah.value},${hijau.value},${biru.value})`;
});
biru.addEventListener('input',function(){
    document.body.style.backgroundColor = `rgb(${merah.value},${hijau.value},${biru.value})`;
    document.getElementById('rgb').innerHTML = `rgb(${merah.value},${hijau.value},${biru.value})`;
});
document.body.addEventListener('mousemove',function(event){
    const xPos = Math.round((event.clientX/window.innerWidth)*255);
    const yPos = Math.round((event.clientY/window.innerHeight)*255);
    document.body.style.backgroundColor = `rgb(${xPos},${yPos},100)`;
    document.getElementById('rgb').innerHTML = `rgb(${xPos},${yPos},100)`;

});
