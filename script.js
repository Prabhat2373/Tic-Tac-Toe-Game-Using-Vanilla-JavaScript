console.log('Welcome to Tic Tac Toe');
let bgmusic = new Audio('bgmusic.mp3');
let AudioTurn = new Audio('ting.mp3');
let gameovermusic = new Audio('gameover.mp3');
let congoAud = new Audio('congo.mp3');
let turn = "X";
let gameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxText');

    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15,0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135],
    ];
    wins.forEach(element => {
        if ((boxtext[element[0]].innerText === boxtext[element[1]].innerText) && (boxtext[element[2]].innerText === boxtext[element[1]].innerText) && (boxtext[element[0]].innerText !== "")) {
            // document.querySelector('.info').innerText = "Congratulations !! " + boxtext[e[0]].innerText + "WON !";
            let wontxt = document.querySelector('.info').innerText = boxtext[element[0]].innerText + " WON !";
            gameover = true;
            if (gameover == true) {
                congoAud.play()
            }
            // console.log(wontxt)
            if(wontxt[0]){
                // alert('won')
                console.log('won');
                 
            }
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '256px';
            document.querySelector('.line').style.width = "20vw";
            document.querySelector('.line').style.transform = `translate(${element[3]}vw, ${element[4]}vw) rotate(${element[5]}deg)`; 
        }
    })
}

// Main Logic
// bgmusic.play()
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            AudioTurn.play();
            checkWin();
            if (!gameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for : " + turn;
            }
        }
    })
});

//Add onclick event listener on reset button
let reset = document.getElementById('reset');
reset.addEventListener('click', () => {

    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false;
    document.querySelector('.line').style.width = "0";
    document.getElementsByClassName("info")[0].innerText = "Turn for : " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '0';
});
