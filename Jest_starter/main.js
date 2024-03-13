import { compare } from "./compare";
import { generateRandomNR } from "./genrandNr";

document.querySelector(".checkButton").addEventListener("click", check)

function check(){
    randomNum = generateRandomNR(1,10)
    console.log(randomNum);
    console.log("click done");
    inputNumber = document.querySelector(".guessedNumber").value
    inputNumber=Number(inputNumber)
    if(isNaN(inputNumber)==true){
        console.log("Nem szám!");
        return
    }
    console.log(inputNumber);

    
    
}