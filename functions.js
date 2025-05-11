function flashColor(button){
    button.classList.add("flash");
    setTimeout(function(){
     button.classList.remove("flash");
         }, 100) 
    
 }

function bummer(arg){
    arg.classList.add("bummer");
    setTimeout(function(){
        arg.classList.remove("bummer")
    } , 100)
}


function ifArraysAreEqual(arr1 , arr2){
    if((arr1.length !==arr2.length)){
        return false;
    }
    for(let i=0; i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }
    return true;
}

function levelUp(){  
    level++
    h2.style.display="inline-block";
    h2.innerText=`level ${level}`;
    
    userSeq.length=0;


    let randomIndex = Math.floor(Math.random()*4);
    let chosenColorId = colors[randomIndex];
    let chosenColor = document.querySelector(`#${chosenColorId}`)
    randomSeq.push(`${colors[randomIndex]}`);
    flashColor(chosenColor);

    // console.log(randomIndex)
    // console.log(chosenColor)
    // console.log(chosenColorId)
}


function lose(){

    isGameStarted=false;
    bummer(body);
    uSuck.style.display="inline-block";
    h2.style.display='none'
    startButton.style.display="inline-block";
    background.classList.add(".blur");
}