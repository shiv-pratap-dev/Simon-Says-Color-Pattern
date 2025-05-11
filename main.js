
let body=document.querySelector("body");
uSuck.style.display="none";


let startButton= document.querySelector("#startButton");
startButton.addEventListener("mouseenter" ,function(){
    let newH = (75- (0.1*75)) + "px" ;
    let newW = (200- (0.1*200)) + "px" ;

    startButton.style.height = newH;
    startButton.style.width = newW;
    uSuck.style.display="none";

})

startButton.addEventListener("mouseleave" ,function(){
    startButton.style.height = "75px";
    startButton.style.width = "200px";

})


startButton.addEventListener("click" , function(){
    background.classList.remove(".blur");
    isGameStarted=true;
    startButton.style.display= "none";
    level=0;
    randomSeq.length=0;
    userSeq.length=0;
    levelUp();
    
})

let allButtons = document.querySelectorAll(".button");


    
    allButtons.forEach(button=>{
    button.addEventListener("click" , ()=> {
        if(!isGameStarted){
            alert("nigga start the game first")
            return; 
        }

        flashColor(button);
        userSeq.push(`${button.id}`)

        let currentIdx= userSeq.length -1;

        if(userSeq[currentIdx] !== randomSeq[currentIdx]){
            lose();
            return;
        }

        if(randomSeq.length===userSeq.length){
                levelUp();
            }
    }
        
    
    )})








