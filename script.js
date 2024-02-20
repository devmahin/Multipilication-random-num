const question = document.getElementById("question");
const form = document.querySelector("form");
const formalElement = document.getElementById("formalElement");



function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


function showQuestion(){
    let random1 = getRandomArbitrary(1, 10);
    let random2 = getRandomArbitrary(1, 10);
    let questionRandom = `Q. What id ${random1} multipel by ${random2} ?`
    let total = random1 * random2;
    return {questionRandom, total}
}




function check (e){
    let value = new FormData(formalElement);
    
    
}