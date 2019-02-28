<?php

function assignChoice($choice) {
    
    switch($choice) {
        case "Paper": 
        case 'paper':
        case '2':
            $value = "Paper";
            //echo $value;
            break;

        case "Scissors": 
        case 'scissors':
        case '3':
            $value = "Scissors";
            //echo $value;
            break;

        case '1':
        case "Rock":
        case 'rock':
            $value = "Rock";
            //echo $value;
        break;

        default:
            $value = "You fool! You are getting Paper";
            //echo $value;
            break;
    }
    return $value;
}

function echoResult($user, $computer) {
    if ($user == $computer) {
            echo "Draw! 🙃\n";
        }
        elseif (($user == 'Rock' && $computer == 'Scissors') || ($user == 'Paper' && $computer == 'Rock') || ($user == 'Scissors' && $computer == 'Paper')) {
            echo "Winner! 😆\n" ;
        }
        elseif (($user == 'Scissors' && $computer == 'Rock') || ($user == 'Rock' && $computer == 'Paper') || ($user == 'Paper' && $computer == 'Scissors')) {
            echo "Loser 😒\n";
        }
}

function getInputs() {
    //echo "Select R P or S \n";
    $userChoice = $_REQUEST["choice"];

    $userChoice = assignChoice($userChoice);              //Overwriting $userVar
    echo "<p>You have selected $userChoice. </p>";

    $computerVar = rand(1 , 3);
    $computerVar = assignChoice($computerVar);
    echo "<p>Computer has selected $computerVar </p>";      //Overwriting $computerVar

    return [$userChoice, $computerVar];
}

function playGame() {    
//    echo "Would you like to play Rock, Paper, Scissors - Y or N? \n";
//  $replay = $_REQUEST["replay"];

    //Code to ask if user wants to play again
//    switch($replay) {
//        case 'Y':
//        case 'y':
            $vars = getInputs();
            echoResult($vars[0], $vars[1]);
            //playGame();
  //          break;

  //    case 'N':
  //    case 'n':
  //        echo "Goodbye!";
  //         break;

    }
//}

//Actual code

playGame();