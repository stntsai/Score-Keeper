var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var p1display = document.getElementById("p1display");
var p2display = document.getElementById("p2display");
var reset = document.getElementById("reset");
var numinput = document.querySelector("input");
var winScore = document.getElementById("winScore");
var winningScore = 5;
var p1score = 0;
var p2score = 0;
var gameover = false;

p1button.addEventListener("click", function() {
    if (!gameover) {
        p1score++;
        p1display.textContent = p1score;
        if (p1score == winningScore) {
            p1display.classList.add("winner");
            gameover = true;
        }
    }
});

p2button.addEventListener("click", function() {
    if (!gameover) {
        p2score++;
        p2display.textContent = p2score;
        if (p2score == winningScore) {
            p2display.classList.add("winner");
            gameover = true;
        }
    }
});

reset.addEventListener("click", function() {
    p1score = 0;
    p2score = 0;
    p1display.textContent = p1score;
    p2display.textContent = p2score;
    p1display.classList.remove("winner");
    p2display.classList.remove("winner");
    gameover = false;
});


numinput.addEventListener("change", function() {
    winScore.textContent = Number(numinput.value);
    winningScore = Number(numinput.value);
});