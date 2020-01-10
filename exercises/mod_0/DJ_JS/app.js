var body = document.getElementById("body")
var djBox = document.getElementById("djBox")
var dStyle = djBox.style.backgroundColor
var bStyle = body.style.backgroundColor

var kPress = function(){
    if(event){console.log(event.which)};
    if(event.keyCode===66){fBlue()};
    if(event.keyCode===82){fRed()};
    if(event.keyCode===89){fYellow()};
    if(event.keyCode===71){fGreen()};
    if(event.keyCode===79){fOrange()};
}

function fGrey(){
    djBox.style.backgroundColor="gray";
    body.style.backgroundColor="lightgrey";   
};
function fBlue(){
    djBox.style.backgroundColor="blue";
    body.style.backgroundColor="lightblue";
    setTimeout(fGrey, 4000);
};
function fRed(){
    djBox.style.backgroundColor="red";
    body.style.backgroundColor="lightcoral";
    setTimeout(fGrey, 4000);
};
function fYellow(){
    djBox.style.backgroundColor="yellow";
    body.style.backgroundColor="lightyellow";
    setTimeout(fGrey, 4000);
};
function fGreen(){
    djBox.style.backgroundColor="green";
    body.style.backgroundColor="lightgreen";
    setTimeout(fGrey, 4000);
};
function fOrange(){
    djBox.style.backgroundColor="orangered";
    body.style.backgroundColor="lightsalmon";
    setTimeout(fGrey, 4000);
};

document.addEventListener("keydown", kPress);
djBox.addEventListener("mouseover", fBlue);
djBox.addEventListener("mousedown", fRed);
djBox.addEventListener("mouseup", fYellow);
djBox.addEventListener("dblclick", fGreen);
document.addEventListener("mousewheel", fOrange);