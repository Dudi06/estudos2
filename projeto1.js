const prompt = require("prompt-sync")()
const name = prompt("what is your name? ")
console.log("Hello " + name + " welcome to our game!")

const shouldWePlay = prompt('Do you want to play? ')

if (shouldWePlay.toLowerCase() === "yes") {
    console.log("Okay, we will play!")

const leftOrRight = prompt("You enter a maze, do you want to go left or right? ")
if (leftOrRight == "left") {
    console.log("you go left and see a bridge...")
    const cross = prompt("Do you want to cross the bridge? ").toLowerCase()
    if (cross === "yes"){
        console.log("The bridge was weak and you fell. You lost...") 
} else {
console.log("Good choice, you win!")
}
} else {
    console.log("You go right and you fall off a cliff. You lost...")
}

} else if (shouldWePlay.toLowerCase() === "no") {
    console.log("Okay :(")
} else {
    console.log("invalid input...")
}

