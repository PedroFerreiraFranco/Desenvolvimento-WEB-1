let muda = true;   
let cont=0;         
title2.addEventListener('click',mudarCores);
function mudarCores(){
    if(muda){
        title2.style.color = 'red';
        div1.style.background = 'gray';
        muda=false;
    }
    else{
        title2.style.color = 'blueviolet';
        div1.style.background = 'lightgrey';
        muda=true;
    }
}


