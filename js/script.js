function getComputerChoice()
{
    let choice = Math.round(Math.random() * 2);
    if(choice==0){
        choice = "rock";
    }
    else if (choice==1){
        choice = "paper";
    }
    else{
        choice = "scissors";
    }
    return choice;
}

    //Conditions: Paper > Rock, Rock > Scissors, Scissors > Paper
    //Conditions: 1 -> User won, 2-> Computer won, 3->Draw, 4->Error
function playRound(userChoice,computerChoice)
{   
    let userWon = 1
    let computerWon = 2;
    let draw = 3;
    let error = 4;
    if(userChoice==computerChoice)
    {
        alert("It seems like we have a draw!");
    }
    if(userChoice=="paper")
    {
        if(computerChoice=="rock")
        {
            alert("You Won! Paper beats Rock");
            return userWon;
        }
        else if(computerChoice=="scissors")
        {
            alert("You Lose! Scissors beats Paper");
            return computerWon;
        }
    }
    else if(userChoice=="rock")
    {
        if(computerChoice=="paper")
        {
            alert("You Lose! Paper beats Rock");
            return computerWon;
        }
        else if(computerChoice=="scissors")
        {
            alert("You Won! Rock beats Scissors");
            return userWon;
        }
    }
    else if(userChoice=="scissors")
    {
        if(computerChoice=="paper")
        {
            alert("You Won! Scissors beats Paper");
            return userWon;
        }
        else if(computerChoice=="rock")
        {
            alert("You Lose! Rock beats Scissors");
            return computerWon;
        }
    }
    else
    {
        alert("That's not a valid answer")            
    }
}

function game()
{
    let user_points = 0;
    let computer_points = 0;
    while(user_points!=3 && computer_points!=3)
    {
        let userChoice = prompt("Write your option!");
        userChoice = userChoice.toLowerCase();
        let computerChoice = getComputerChoice();
        let round = playRound(userChoice,computerChoice);
        if(round==1)
        {
            user_points+=1;
        }
        else if(round==2)
        {
            computer_points+=1;
        }
        alert(`You have ${user_points} points and the computer has ${computer_points} points`);           
    }
    
}

document.addEventListener('DOMContentLoaded',game)