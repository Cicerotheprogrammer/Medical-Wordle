import BODYSTRUCTURESANDFUNCTIONS from "./wordlists/body_structures_and_functions.js";
import DIVERSIFIEDHEALTHOCCUPATIONS from "./wordlists/diversified_health_occupations.js";

const pickRandomTerm = () => {
    var chosenWord;
    //Pick one of the two books
    let book = Math.floor(Math.random() * 2);
    if (book == 0) {
        chosenWord = BODYSTRUCTURESANDFUNCTIONS[Math.floor(Math.random() * BODYSTRUCTURESANDFUNCTIONS.length-1)];
    }   else {
        chosenWord = DIVERSIFIEDHEALTHOCCUPATIONS[Math.floor(Math.random() * DIVERSIFIEDHEALTHOCCUPATIONS.length-1)];
    }

    return chosenWord.toUpperCase();
}

console.log(pickRandomTerm());