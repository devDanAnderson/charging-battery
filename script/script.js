
var counter = 0;
const batteryCells = document.querySelectorAll(".cell");

function charge() {

    if(counter < 4) {
        batteryCells[counter].style.setProperty("opacity", "1");
        counter ++;
    } else {
        reset();
        counter = 0;
    }
    
}

function reset() {
    for(var i = 0; i < batteryCells.length; i++) {
        batteryCells[i].style.setProperty("opacity", "0");
    }
}

setInterval(() => {
    charge();
}, 1000);
