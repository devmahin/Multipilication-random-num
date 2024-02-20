const question = document.getElementById("question");
const score = document.getElementById("score");
const form = document.querySelector("form");
const formalElement = document.getElementById("formalElement");
let currectAns = 0;


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


function showQuestion() {
    let random1 = getRandomArbitrary(1, 10);
    let random2 = getRandomArbitrary(1, 10);


    let questionRandom = `Q. What id ${random1} multipel by ${random2} ?`
    let total = random1 * random2;
    return { questionRandom, total }
}

function htmlShow() {
    const { questionRandom, total } = showQuestion();
    question.innerText = questionRandom;
    currectAns = total;
}
htmlShow()

function check(e) {
    e.preventDefault();
    let value = new FormData(formalElement);
    let userValue = value.get("ans");
    if(userValue === currectAns){
        
    }
}