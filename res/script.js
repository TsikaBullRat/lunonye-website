var r = 0;

setInterval(()=>{
    let img = document.getElementsByClassName("img")

    for(var i = 0; i < 0; i++){
        img[i].style.opacity = 0
    }
    img[r].style.opacity = 1 
    
    if(r == 2){
        r = 0
    }else{
        r++
    }
}, 5000)