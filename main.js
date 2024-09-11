function bigSize(){
    document.querySelector(".Content").classList.add("big");
}

function smallSize(){
    document.querySelector(".Content").classList.add("small");
}

document.querySelector('.Zoom-in-size').onclick = bigSize;

document.querySelector('.Reduce-size').onclick = smallSize;