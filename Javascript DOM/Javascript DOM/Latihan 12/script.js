const thumnail = document.querySelector('.thumnail');
const thumnailJumbo = document.querySelector('.jumbo');
let eOld=null;
thumnail.addEventListener('click',function(e){
    if(e.target.className == 'thum'){
        if(eOld!=null){
            eOld.classList.remove('active');
        }
        thumnailJumbo.src = e.target.src;
        thumnailJumbo.classList.add('fade');
        setTimeout(function(){
            thumnailJumbo.classList.remove('fade');
        },500);
        e.target.classList.add('active');
        eOld=e.target; 
        
    }
});