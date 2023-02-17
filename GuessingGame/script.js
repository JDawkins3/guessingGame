let guess = document.getElementById("guess");
let btn = document.getElementById("submit")
let newP = document.createElement('p');
let emptyDiv = document.getElementById("emptyDiv");
let guesses = 0;
let guessLimit = 10;
let reset = document.getElementById("reset");
let body = document.body;
let number = Math.floor(Math.random() *100 +1);
let score = document.getElementById("score");
let newScore = 0;
let startBtn = document.getElementById("startBtn");
let hiddenDiv = document.getElementById('hiddenDiv');


startBtn.addEventListener("click", startGame = () =>{
    hiddenDiv.style.display = "block";
})

gLimitFun = () => {
    if(guesses >= guessLimit){
        newP.innerText = `You are out of guesses... the number was ${number}`;
        restartGameFun();
    }
    
}
level = document.getElementById("level");
newLevel = 0;
levelUpg = () =>{
    if(newScore > 1 && newScore % 2 == 0){
        newLevel++;
        level.innerText = `Level: ${newLevel}`

    }
    if(newLevel >= 5 && newLevel < 10){
        level.style.color = "blueviolet";

    }
    if(newLevel >= 10){
        level.style.color = "gold";
    }
}

scoreUpg = () =>{
        newScore++;
        score.innerText = `Score: ${newScore}`;
        if(newScore >= 5 && newScore < 10){
            score.style.color = "blueviolet";

        }
        if(newScore >= 10){
            score.style.color = "gold";

        }
}

guessFun = () => {
    if(guess.value == number){
        newP.innerText = ` ${guess.value} is correct! You got it in ${guesses} guesses!`;
        guesses = 0;
        scoreUpg();
        levelUpg();
        number = Math.floor(Math.random() *100 +1);
        body.style.background = "linear-gradient(45deg, rgb(0, 255, 170), rgba(0, 255, 30, 0.8)";
    }
    else if(guess.value < number){
        newP.innerText = `${guess.value} is too low! You have ${10 - guesses} guesses remaining...`;
        gLimitFun();
        body.style.background = "linear-gradient(45deg, rgb(255, 0, 100), rgba(255, 0, 30, 0.8)";
    }
    else{
        newP.innerText = `${guess.value} is too high! You have ${10 - guesses} guesses remaining...`;
        gLimitFun();
        body.style.background = "linear-gradient(45deg, rgb(255, 0, 100), rgba(255, 0, 30, 0.8)";
    }
    emptyDiv.append(newP);

}

guess.addEventListener("keypress", function(e){
    if(e.which == 13){
        guesses++;
        guessFun();
        guess.value = "";
    }
 })

btn.addEventListener("click", function(){
        guesses++;
        guessFun();
        guess.value = "";
    
 })

reset.addEventListener("click", function(){
    restartGameFun();

})

restartGameFun = () =>{
    newScore = 0;
    newLevel = 0;
    number = Math.floor(Math.random() *100 +1);
    guesses = 0;
    body.style.background = "linear-gradient(45deg, rgb(129, 221, 251), rgb(19, 100, 212)";
}


