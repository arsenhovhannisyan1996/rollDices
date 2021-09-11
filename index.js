const images = ["./images/dice-01.svg",
    "./images/dice-02.svg",
    "./images/dice-03.svg",
    "./images/dice-04.svg",
    "./images/dice-05.svg",
    "./images/dice-06.svg"];
const dice = document.querySelectorAll("img");

const rollButton = document.getElementById("roll");

function roll(){
    dice.forEach(function(die){
        die.classList.add("shake");
    });
    setTimeout(function(){
            dice.forEach(function(die){
                die.classList.remove("shake");
            });

            let dieOneValue = Math.floor(Math.random()*images.length);
            let dieTwoValue = Math.floor(Math.random()*images.length);
            document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
            document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
            document.querySelector("#total").innerHTML = "Your roll is " + ( (dieOneValue +1) + (dieTwoValue + 1) );
        },
        1000
    );
}

rollButton.addEventListener("click" , roll)
roll();