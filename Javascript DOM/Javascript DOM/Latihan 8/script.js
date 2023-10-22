const gajah = document.querySelector('ul li .gajah');
const orang = document.querySelector('ul li .orang');
const semut = document.querySelector('ul li .semut');
const gambarComputer = document.querySelector('.area-komputer img');
const info = document.querySelector('.info');
// let com;
// gajah.addEventListener('click',function(){
//     com = Math.random();

//     if(com < 0.3){
//         computer.src = 'gajah.png';
//     }else if(com>0.3&&com<0.6){
//         computer.src = 'semut.png';
//     }else{
//         computer.src = 'orang.png';
//     }
//     if(com<0.3){
//         info.innerHTML = 'SERI';
//     }else if(com>0.6){
//         info.innerHTML = 'MENANG';
//     }else{
//         info.innerHTML = 'KALAH';
//     }
    
// });
// orang.addEventListener('click',function(){
//     com = Math.random();

//     if(com < 0.3){
//         computer.src = 'gajah.png';
//     }else if(com>0.3&&com<0.6){
//         computer.src = 'semut.png';
//     }else{
//         computer.src = 'orang.png';
//     }
//     if(com>0.6){
//         info.innerHTML = 'SERI';
//     }else if(com>0.3&&com<0.6){
//         info.innerHTML = 'MENANG';
//     }else{
//         info.innerHTML = 'KALAH';
//     }
    
// });
// semut.addEventListener('click',function(){
//     com = Math.random();

//     if(com < 0.3){
//         computer.src = 'gajah.png';
//     }else if(com>0.3&&com<0.6){
//         computer.src = 'semut.png';
//     }else{
//         computer.src = 'orang.png';
//     }
//     if(com>0.3&&com<0.6){
//         info.innerHTML = 'SERI';
//     }else if(com<0.3){
//         info.innerHTML = 'MENANG';
//     }else{
//         info.innerHTML = 'KALAH';
//     }
    
// });

function pilihanCom()
{
    const com = Math.random();
    if(com<0.3) return 'gajah'
    if(com>0.3&&com<0.6) return 'semut'
        return 'orang';
}

function rulesPermainan(player,komputer)
{
    if(player === komputer) return "seri";
    if(player === "gajah") return (komputer == 'orang')?'menang':'kalah';
    if(player === "semut") return (komputer == 'gajah')?'menang':'kalah';
    return (komputer=='semut')?'menang':'kalah';
}

function putar()
{
    const gambar = ['gajah','orang','semut'];
    let i=0;
    const waktuMulai= new Date().getTime();
    setInterval(function(){
        if(new Date().getTime()-waktuMulai>1000){
            clearInterval;
            return;
        }
        gambarComputer.setAttribute('src',`${gambar[i++]}.png`);
        if(i==gambar.length) i=0;
    },100)
}
const pilihan = document.querySelectorAll('ul li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click',function(){
        const pilihanPlayer = pil.className;
        const pilihanKomputer = pilihanCom();
        const hasil =rulesPermainan(pilihanPlayer,pilihanKomputer);
        putar();
        setTimeout(function(){
            gambarComputer.setAttribute('src',`${pilihanKomputer}.png`);
            info.innerHTML = hasil;

        },1000);
    });
});

// gajah.addEventListener('click',function(){
//     const pilihanPlayer = gajah.className;
//     const pilihanKomputer = pilihanCom();
//     const hasil =rulesPermainan(pilihanPlayer,pilihanKomputer);
//     gambarComputer.setAttribute('src',`${pilihanKomputer}.png`);
//     info.innerHTML = hasil;

// });
// semut.addEventListener('click',function(){
//     const pilihanPlayer = gajah.className;
//     const pilihanKomputer = pilihanCom();
//     const hasil =rulesPermainan(pilihanPlayer,pilihanKomputer);
//     gambarComputer.setAttribute('src',`${pilihanKomputer}.png`);
//     info.innerHTML = hasil;

// });
// orang.addEventListener('click',function(){
//     const pilihanPlayer = gajah.className;
//     const pilihanKomputer = pilihanCom();
//     const hasil =rulesPermainan(pilihanPlayer,pilihanKomputer);
//     gambarComputer.setAttribute('src',`${pilihanKomputer}.png`);
//     info.innerHTML = hasil;
// });
