let userScore = 0
let compScore = 0
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const users = document.querySelector("#user_score")
let comps = document.querySelector("#comp_score")

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {    //for performing task of clicking an image
        const userChoice = choice.getAttribute("id")    //id required for score calculation and checking for userinput and compinput
        playGame(userChoice)                           //takes userinput and comp choice and checks who is winner
    })
 })
 const playGame = (userChoice) => {
       const compChoice = genCompChoice()
       if(userChoice === compChoice){
        gameDraw()
       }
       else{
        let userWin = true
        if(userChoice === "rock")
        {
            //papers,scissors
            userWin = compChoice === "paper" ? false : true
        }
        else if(userChoice == "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true
        }
        else{
            //rock,paper
            userWin = compChoice === "paper" ? true : false
        }
       showWinner(userWin,)
    }
 }
 const genCompChoice = () =>{
    const options = ["rock","paper","scissors"]    //random function only generates number between 0 and 1 i.e we can use that numbers in array index and generate a choice as computer choice
  const randIdx = Math.floor(Math.random()*3)    // takes a random number and multiplying it with 3 gives numbers in better 0 and2 if we multiply with 10 then gives between 0 and 9
  return options[randIdx]                         //

 }
 const gameDraw = () => {
    msg.innerText="game draw! Play again.."
    msg.style.backgroundColor = "rgb(34, 35, 35)"
 }
 const showWinner = (userWin) => {
    if(userWin){
        userScore++
        msg.innerText = 'You Win!'
        msg.style.backgroundColor = "green"
        users.innerText = userScore
    }
    else{
        compScore++
        msg.innerText= "You Lose!"
        msg.style.backgroundColor = "red"
        comps.innerText = compScore
    }
 }