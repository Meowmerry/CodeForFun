// --------------  LOOP ----------------
// A for loop contains three expressions separated by ; inside the parentheses:
// 1 > an initialization starts the loop and can also be used to declare the iterator variable.
// 2 > a stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
// 3 > an iteration statement is used to update the iterator variable on each loop.

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

// Write your code below
for (let count = 5; count <= 10; count++) {
  console.log(count);
}

//Looping in Reverse
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}
