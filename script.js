let square = document.querySelectorAll(".square");
//let resetBtn = document.getElementById("reset");
let count = 0;
let message = document.querySelector("h2");
//let checkWinner = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
var win = false;
var sq1 = document.querySelector('#square1');
var sq2 = document.querySelector('#square2');
var sq3 = document.querySelector('#square3');
var sq4 = document.querySelector('#square4');
var sq5 = document.querySelector('#square5');
var sq6 = document.querySelector('#square6');
var sq7 = document.querySelector('#square7');
var sq8 = document.querySelector('#square8');
var sq9 = document.querySelector('#square9');


class Player {
    constructor(name){
        this.name = name;
    }
}

class Game {

    constructor() {
        this.xPlayer = new Player("X");
        this.oPlayer = new Player("O");
        this.player =  this.xPlayer.name;
        console.log(this.player);
    }

    playGame(){

        var player = this.player;

        function changePlayer() {
            player === 'X' ? (player = "O") : (player = "X");
            console.log("player = " + player + " dans changePlayer");
        }

        for(let i = 0; i < square.length; i++){
            square[i].addEventListener("click", play);
                function play() {
                    if (square[i].classList.contains("cross") == false && square[i].classList.contains("circle") == false){
                        if(player === 'X'){
                            square[i].innerHTML = "X";
                            square[i].classList.replace("square", "cross");
                        }else{
                            square[i].innerHTML = "O";
                            square[i].classList.replace("square", "circle");
                        }
                        console.log("valeur de i = " + i)
                        changePlayer();
                        count++;
                        (count == 9) ? (message.innerText = 'Personne ne gagne !') : (message.innerText = 'Joueur ' + player + ' à toi de jouer !');
                        console.log(count);
                    }
                }           
            }     
        }
    
    checkWin() {
        console.log("valeur de i = " + this.i + " dans checkWin")
        console.log(sq1.classList.contains('cross'));

        sq1.addEventListener("click", check);
        sq2.addEventListener("click", check);
        sq3.addEventListener("click", check);
        sq4.addEventListener("click", check);
        sq5.addEventListener("click", check);
        sq6.addEventListener("click", check);
        sq7.addEventListener("click", check);
        sq8.addEventListener("click", check);
        sq9.addEventListener("click", check);

        function check(){

            if ( sq1.classList.contains('cross') && sq2.classList.contains('cross') && sq3.classList.contains('cross') ) {
                winAlert("X");
            } else if ( sq1.classList.contains('circle') && sq2.classList.contains('circle') && sq3.classList.contains('circle') ) {
                winAlert("O");
            }
            else if ( sq4.classList.contains('cross') && sq5.classList.contains('cross') && sq6.classList.contains('cross') ) {
                winAlert("X");
            } else if ( sq4.classList.contains('circle') && sq5.classList.contains('circle') && sq6.classList.contains('circle') ) {
                winAlert("O");
            }
            else if ( sq7.classList.contains('cross') && sq8.classList.contains('cross') && sq9.classList.contains('cross') ) {
                winAlert("X");
            } else if ( sq7.classList.contains('circle') && sq8.classList.contains('circle') && sq9.classList.contains('circle') ) {
                winAlert("O");
            }
            else if ( sq1.classList.contains('cross') && sq4.classList.contains('cross') && sq7.classList.contains('cross') ) {
                winAlert("X");
            } else if ( sq1.classList.contains('circle') && sq4.classList.contains('circle') && sq7.classList.contains('circle') ) {
                winAlert("O");
            }
            else if ( sq5.classList.contains('cross') && sq2.classList.contains('cross') && sq8.classList.contains('cross') ) {
                winAlert("X");
            } else if ( sq5.classList.contains('circle') && sq2.classList.contains('circle') && sq8.classList.contains('circle') ) {
                winAlert("O");
            }
            else if ( sq6.classList.contains('cross') && sq9.classList.contains('cross') && sq3.classList.contains('cross') ) {
                winAlert("X");
            } else if ( sq6.classList.contains('circle') && sq9.classList.contains('circle') && sq3.classList.contains('circle') ) {
                winAlert("O");
            }
            else if ( sq1.classList.contains('cross') && sq5.classList.contains('cross') && sq9.classList.contains('cross') ) {
                winAlert("X");
            } else if ( sq1.classList.contains('circle') && sq5.classList.contains('circle') && sq9.classList.contains('circle') ) {
                winAlert("O");
            }
            else if ( sq5.classList.contains('cross') && sq7.classList.contains('cross') && sq3.classList.contains('cross') ) {
                winAlert("X");
            } else if ( sq5.classList.contains('circle') && sq7.classList.contains('circle') && sq3.classList.contains('circle') ) {
                winAlert("O");
            }
        }

        function winAlert(winner) {

            if (winner !== 'undefined') {
                message.innerText = "Congratulations " + winner + "  Gagne !!!"
            }
        }
}

    // reset() {

    //     this.reset.addEventListener("click", restart);

    //     function restart() {
    //         for (var i = 0; i < square.length; i++) {
    //             square[i].innerHTML = "";
    //             square[i].classList.replace("cross", "square");
    //             square[i].classList.replace("circle", "square");    
    //         }
    //     }
    // }
}

var game = new Game();

game.playGame();
game.checkWin();
//game.reset();
console.log(count);