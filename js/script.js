const computerChoices = ['rock','paper','scissors'];
const resultText = document.getElementById('resultText');
const score = document.getElementById('score');
const choices = document.querySelectorAll('.box');
choices.forEach(choice => choice.addEventListener('click',()=>{
    playRound(choice.id,getComputerChoice());
}));
let userPoints = 0;
let computerPoints = 0;


function getComputerChoice()
{
    const randomChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return randomChoice;
}

function playRound(userChoice,computerChoice)
{
    if(userChoice==computerChoice)
    {
        resultText.textContent = "It seems like we have a draw!";
        score.textContent = `You: ${userPoints}     Computer: ${computerPoints}`;
    }
    if(userChoice=="paper")
    {
        if(computerChoice=="rock")
        {
            resultText.textContent = "You Won! Paper beats Rock";
            userPoints+=1;
            score.textContent = `You: ${userPoints}     Computer: ${computerPoints}`;
        }
        else if(computerChoice=="scissors")
        {
            resultText.textContent = "You Lose! Scissors beats Paper";
            computerPoints+=1;
            score.textContent = `You: ${userPoints}     Computer: ${computerPoints}`;
        }
    }
    else if(userChoice=="rock")
    {
        if(computerChoice=="paper")
        {
            resultText.textContent = "You Lose! Paper beats Rock";
            computerPoints+=1;
            score.textContent = `You: ${userPoints}     Computer: ${computerPoints}`;
        }
        else if(computerChoice=="scissors")
        {
            resultText.textContent = "You Won! Rock beats Scissors";
            userPoints+=1;
            score.textContent = `You: ${userPoints}     Computer: ${computerPoints}`;
        }
    }
    else if(userChoice=="scissors")
    {
        if(computerChoice=="paper")
        {
            resultText.textContent = "You Won! Scissors beats Paper";
            userPoints+=1;
            score.textContent = `You: ${userPoints}     Computer: ${computerPoints}`;
        }
        else if(computerChoice=="rock")
        {
            resultText.textContent = "You Lose! Rock beats Scissors";
            computerPoints+=1;
            score.textContent = `You: ${userPoints}     Computer: ${computerPoints}`;
        }
    }
}

