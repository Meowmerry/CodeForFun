const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || 
    userInput === 'paper'|| 
    userInput === 'scissors' || 
    userInput === 'bomb'  ){
      return userInput;
    }else{
      console.log('Error!')
    }
  }
  const getComputerChoice = () =>  {
  let randomNumber = Math.floor(Math.random() * 3) 
    switch(randomNumber){
    case 0:
      return 'rock';
      break;
    case 1: 
      return 'paper';
      break;
    case 2:
      return 'scissors'
      break;
  }
}
  
  
  const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === 'bomb'){
      return 'You won!'
    }
    if(userChoice === computerChoice){
      return `The game was tie!`
    } if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won!';
      }else{
        return 'You won!';
      }
    }if(userChoice === 'paper'){
      if(computerChoice ==='scissors'){
        return 'The computer won!'
      }else{
        return 'You won!';
      }
    }if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The computer won!';
      }else{
        return 'You won!';
      }
    }
  }
  
  
  const playGame = () =>{
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice)
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  }

playGame();


const getTrainingDays = event => {
  let days;
  if (event === 'Marathon') {
    let days = 50;
  } else if (event === 'Triathlon') {
    let days = 100;
  } else if (event === 'Pentathlon') {
    let days = 200;
  }
  return days;
};

// ----------------   Training Days -------------
// The scope of `random` is too loose 
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
   if (random === 0) {
     return 'Marathon';
   } else if (random === 1) {
     return 'Triathlon';
   } else if (random === 2) {
     return 'Pentathlon';
   }
 };
 
 // The scope of `days` is too tight 
 const getTrainingDays = event => {
   let days;
   if (event === 'Marathon') {
     days = 50;
   } else if (event === 'Triathlon') {
     days = 100;
   } else if (event === 'Pentathlon') {
     days = 200;
   }
   return days;
 };
 
 // The scope of `name` is too tight 
 const logEvent = (name,event) => { 
   console.log(`${name}'s event is: ${event}`);
 };
 
 const logTime = (name,days) => {
   console.log(`${name}'s time to train is: ${days} days`);
 };
 
 const event = getRandEvent();
 const days = getTrainingDays(event);
 // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
 
 const name = 'Nala';
 
 logEvent(name, event);
 logTime(name, days);
 
 const event2 = getRandEvent();
 const days2 = getTrainingDays(event2);
 const name2 = 'Warren';
 
 logEvent(name2, event2);
 logTime(name2, days2);
 