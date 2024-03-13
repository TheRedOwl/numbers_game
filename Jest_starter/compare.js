export const compare=(guessedNr,randomNr,valasz)=>{
    if(guessedNr==randomNr){
        valasz="Eltaláltad"
    }
    else if(guessedNr<randomNr){
        valasz="A te számod kisebb"
    }
    else if(guessedNr>randomNr){
        valasz="A te számod nagyobb"
    }
}