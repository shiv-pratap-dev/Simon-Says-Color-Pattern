let randomSeq=[];
let userSeq=[];
let level=0 ;

let isGameStarted = false;

let colors=["color1" , "color2" , "color3"  , "color4"];


let randomIndex = Math.floor(Math.random()*4);
let chosenColorId = colors[randomIndex];
let chosenColor = document.querySelector(`#${chosenColorId}`)
randomSeq.push(`${colors[randomIndex]}`);

let h2=document.querySelector("h2");

let uSuck = document.querySelector("#lose");

const background = document.querySelector("#background");