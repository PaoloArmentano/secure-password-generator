const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let button = document.getElementById("btn")
let password1 = document.getElementById("password1")
let password2 = document.getElementById("password2")

function generatePassword(){
    let passwordFirst = ""
    let passwordSecond = ""
    for(let i = 0; i < 16; i++){
        let randomPassword1 = Math.floor(Math.random() * characters.length)
        passwordFirst += characters[randomPassword1]
        let randomPassword2 = Math.floor(Math.random() * characters.length)
        passwordSecond += characters[randomPassword2]
    }
    password1.innerText = passwordFirst
    password2.innerText = passwordSecond
}



