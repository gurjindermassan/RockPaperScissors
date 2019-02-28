//selector variable definition
var dialogue = document.querySelector("#replay");   //use querySelector as it's more versatile. #is the selector
var result = document.querySelector("#result");
var game = document.querySelector("#game");
var goodbye = document.querySelector("#goodbye");
var refresh = document.querySelector("#refresh");
var win = document.querySelector("#win .value"); //. is for class name 'value'
var lose = document.querySelector("#lose .value");
var draw = document.querySelector("#draw .value");
//variable definition
var counterWin = 0;
var counterLose = 0;
var counterDraw = 0;
var dialogueDelay = 2500;

updateScore(); //called here to display counters as 0 initally. Function updates the DOM with the value of the counters.

function play(strChoice) {

    var userChoice = new XMLHttpRequest();
    userChoice.onreadystatechange = function() {            //necessary because when the request is made, it tells you when the server is ready to deliver
     
        if (this.readyState == 4 && this.status == 200) {
            onResponse(this.responseText);
        }
    };
    userChoice.open("GET", "GameFunctions.php?choice=" + strChoice, true);
    userChoice.send();
    
} 

function onResponse(resultString) {      //the resultString is the responseText from the XMLHttpRequest
    
    result.innerHTML = resultString;                   //id of the displayed game result
    setTimeout(openDialogue, dialogueDelay);           //time delay for dialogue box to appear
    if (resultString.includes("Winner")) {             //searching for substring in resultString
        counterWin++;                                  //updating counter by 1
    } else if (resultString.includes("Loser")) {
        counterLose++;
    } else if (resultString.includes("Draw")){
        counterDraw++;
    }
    updateScore();                                     //update the counters on the page after each game
}

function updateScore() {                            
    win.innerHTML = counterWin;                    //updating the counter dispay on the page using win.value selector
    lose.innerHTML = counterLose;
    draw.innerHTML = counterDraw;
};


function openDialogue() {                             //adding a class of visible to that element
    dialogue.classList.add("visible");                //classList useful to add, remove and toggle CSS classes on an element
}

function closeDialogue() {
    dialogue.classList.remove("visible");              //clear the dialogue box when yes is selected
}

function removeResult() {                         //remove result string after each game
    result.innerHTML = "";
}


dialogue.querySelector("#yes").addEventListener("click", function(){     //Event Listener is defining what to do when an event happens
    closeDialogue();                                                     //Event Listeners are not in functions usually as they can get called multiple times
    removeResult();                                                      //In this case they are in the root of the script (main scope)
                                                                         //Using anonymous functions
});

dialogue.querySelector("#no").addEventListener("click", function(){      //changing game page to goodbye page
    game.classList.remove("visible");
    goodbye.classList.add("visible");
});



refresh.addEventListener("click", function(){        //code to refresh the page to restart the game
    window.location.reload();
});

