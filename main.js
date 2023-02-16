let colors = ["red","blue","green","black","orange"];

let body = document.querySelector("body");

function on(){

    body.style.background=colors[Math.floor(Math.random()*colors.length)];

}