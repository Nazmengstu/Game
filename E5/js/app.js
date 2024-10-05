const readline = require("readline");

const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('vilken siffra :', (DD) =>{
  DD=DD.toLowerCase();


if(DD===2 || DD===12){
  console.log("That`s even");
} else {
  console.log("That`s odd");
}
rl.close();
});
