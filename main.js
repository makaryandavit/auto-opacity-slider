const contents = document.querySelectorAll('.content');

let zIndex = 0;

setTimeout(function autoSlide(){
    for(let i = 0;i < contents.length;i++){
        contents[i].style.cssText = 'opacity: 0;'
    }

    contents[zIndex].style.cssText = 'opacity: 1;'
    zIndex++;
    if(zIndex > contents.length - 1){
        zIndex = 0;
    }
    setTimeout(autoSlide,2500)
},0)