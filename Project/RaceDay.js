let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;
if (runnerAge > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(`Your number : ${raceNumber} you will race at 9:30 am.`);
} else if (runnerAge > 18 && !registeredEarly) {
  console.log(`Your number : ${raceNumber} you will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Your number : ${raceNumber} you will race at 12:30 am.`);
} else {
  console.log(`Your number : ${raceNumber} you will go to see the registration desk`);
}


let runTime = 35;
let runDistance = 3.5;

if (runTime <= 30 && runDistance > 3.5) {
  console.log("You're super fast!");
} else if (runTime >= 30 && runDistance <= 3) {
  console.log("You're not making your pace!");
} else if (runTime > 30 || runDistance > 3) {
  console.log("Nice workout!"); 
} else {
  console.log("Keep on running!");
}