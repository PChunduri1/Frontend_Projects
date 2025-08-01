const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")

function passwordGenerator(){
    let passwordOne = ""
    let passwordTwo = ""
    for (let i = 0; i < 10; i++) {
           let randomIndex1 = Math.floor(Math.random()*characters.length)
           passwordOne += characters[randomIndex1]
           let randomIndex2 = Math.floor(Math.random()*characters.length)
           passwordTwo += characters[randomIndex2]
           }
            firstPassword.textContent += passwordOne
            secondPassword.textContent += passwordTwo
}


function generatedPassword() {
    firstPassword.textContent = ""
    secondPassword.textContent = ""
    passwordGenerator()
}  