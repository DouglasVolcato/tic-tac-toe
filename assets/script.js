let symbol = 0
let computerPoints = 0
let playerPoints = 0

function start1(){
    document.getElementById("introduction").style.display = "none";
    document.getElementById("choose").style.display = "flex";
}
function start2(num){
    document.getElementById("choose").style.display = "none";
    document.getElementById("board").style.display = "flex";
    document.getElementById("score").style.display = "unset";
    symbol = num == 1 ? 1 : 2;
}
function verifySpaces(){
    for (let i = 1; i <= 9; i++){
        if (document.querySelector(`#box${i}`).innerText == ""){
            return true
        }
    }
    return false
}
function player(local){
    while(true){

        if (document.querySelector(`#box${local}`).innerText != "") {
            break;
        }
        if (symbol == 1 && document.querySelector(`#box${local}`).innerText == ""){
            document.querySelector(`#box${local}`).innerText = "X"
        } else if (document.querySelector(`#box${local}`).innerText == "") {
            document.querySelector(`#box${local}`).innerText = "O";
        }

        if (verifyVictory() == true){
            break
        }
        if (verifyFreeSpaces() == true){
            verifyFreeSpaces()
            break
        }

        computer();

        if (verifyVictory() == true){
            break
        }
        if (verifyFreeSpaces() == true){
            verifyFreeSpaces()
            break
        }

    }
}
function verifyFreeSpaces(){
    if (verifySpaces() == false){
        reset(3);
        return true
    }
    return false
}
function verifyVictory(){
    if (winner() == 1){
        playerPoints++
        reset(1);
        return true
    } else if (winner() == 2){
        computerPoints++
        reset(2);
        return true
    }
    return false
}
function final(){
    for (let i = 1; i <= 9; i++){
        document.querySelector(`#box${i}`).innerText = "";
    }
    document.getElementById("over").style.display = "none";
    document.getElementById("board").style.display = "none";
    document.getElementById("choose").style.display = "flex";
}
function reset(num){
    document.getElementById("playerP").innerText = `${playerPoints}`;
    document.getElementById("computerP").innerText = `${computerPoints}`;
    document.getElementById("over").style.display = "flex";
    if (num == 1){
        document.querySelector("#over p").innerText = "You won!"
    } else if (num == 2){
        document.querySelector("#over p").innerText = "The Computer won!"
    } else if (num == 3){
        document.querySelector("#over p").innerText = "Draw!"
    }
}
function computer(){
    while (true){
        if (symbol != 1){
            if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box2`).innerText == "X" && document.querySelector(`#box3`).innerText == ""){
                document.querySelector(`#box3`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box2`).innerText == "" && document.querySelector(`#box3`).innerText == "X"){
                document.querySelector(`#box2`).innerText = "X"
                break
            } else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box2`).innerText == "X" && document.querySelector(`#box3`).innerText == "X"){
                document.querySelector(`#box1`).innerText = "X"
                break
            }else if(document.querySelector(`#box4`).innerText == "X" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box6`).innerText == ""){
                document.querySelector(`#box6`).innerText = "X"
                break
            }else if(document.querySelector(`#box4`).innerText == "X" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box6`).innerText == "X"){
                document.querySelector(`#box5`).innerText = "X"
                break
            }else if(document.querySelector(`#box4`).innerText == "" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box6`).innerText == "X"){
                document.querySelector(`#box4`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "X" && document.querySelector(`#box8`).innerText == "X" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "X" && document.querySelector(`#box8`).innerText == "" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box8`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "" && document.querySelector(`#box8`).innerText == "X" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box7`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box4`).innerText == "X" && document.querySelector(`#box7`).innerText == ""){
                document.querySelector(`#box7`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box4`).innerText == "" && document.querySelector(`#box7`).innerText == "X"){
                document.querySelector(`#box4`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box4`).innerText == "X" && document.querySelector(`#box7`).innerText == "X"){
                document.querySelector(`#box1`).innerText = "X"
                break
            }else if(document.querySelector(`#box2`).innerText == "X" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box8`).innerText == ""){
                document.querySelector(`#box8`).innerText = "X"
                break
            }else if(document.querySelector(`#box2`).innerText == "X" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box8`).innerText == "X"){
                document.querySelector(`#box5`).innerText = "X"
                break
            }else if(document.querySelector(`#box2`).innerText == "" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box8`).innerText == "X"){
                document.querySelector(`#box2`).innerText = "X"
                break
            }else if(document.querySelector(`#box3`).innerText == "X" && document.querySelector(`#box6`).innerText == "X" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "X"
                break
            }else if(document.querySelector(`#box3`).innerText == "X" && document.querySelector(`#box6`).innerText == "" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box6`).innerText = "X"
                break
            }else if(document.querySelector(`#box3`).innerText == "" && document.querySelector(`#box6`).innerText == "X" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box3`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box5`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box1`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "X" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box3`).innerText == ""){
                document.querySelector(`#box3`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "X" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box3`).innerText == "X"){
                document.querySelector(`#box5`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box3`).innerText == "X"){
                document.querySelector(`#box7`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box2`).innerText == "O" && document.querySelector(`#box3`).innerText == ""){
                document.querySelector(`#box3`).innerText = "X  "
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box2`).innerText == "" && document.querySelector(`#box3`).innerText == "O"){
                document.querySelector(`#box2`).innerText = "X"
                break
            } else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box2`).innerText == "O" && document.querySelector(`#box3`).innerText == "O"){
                document.querySelector(`#box1`).innerText = "X"
                break
            }else if(document.querySelector(`#box4`).innerText == "O" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box6`).innerText == ""){
                document.querySelector(`#box6`).innerText = "X"
                break
            }else if(document.querySelector(`#box4`).innerText == "O" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box6`).innerText == "O"){
                document.querySelector(`#box5`).innerText = "X"
                break
            }else if(document.querySelector(`#box4`).innerText == "" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box6`).innerText == "O"){
                document.querySelector(`#box4`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "O" && document.querySelector(`#box8`).innerText == "O" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "O" && document.querySelector(`#box8`).innerText == "" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box8`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "" && document.querySelector(`#box8`).innerText == "O" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box7`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box4`).innerText == "O" && document.querySelector(`#box7`).innerText == ""){
                document.querySelector(`#box7`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box4`).innerText == "" && document.querySelector(`#box7`).innerText == "O"){
                document.querySelector(`#box4`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box4`).innerText == "O" && document.querySelector(`#box7`).innerText == "O"){
                document.querySelector(`#box1`).innerText = "X"
                break
            }else if(document.querySelector(`#box2`).innerText == "O" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box8`).innerText == ""){
                document.querySelector(`#box8`).innerText = "X"
                break
            }else if(document.querySelector(`#box2`).innerText == "O" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box8`).innerText == "O"){
                document.querySelector(`#box5`).innerText = "X"
                break
            }else if(document.querySelector(`#box2`).innerText == "" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box8`).innerText == "O"){
                document.querySelector(`#box2`).innerText = "X"
                break
            }else if(document.querySelector(`#box3`).innerText == "O" && document.querySelector(`#box6`).innerText == "O" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "X"
                break
            }else if(document.querySelector(`#box3`).innerText == "O" && document.querySelector(`#box6`).innerText == "" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box6`).innerText = "X"
                break
            }else if(document.querySelector(`#box3`).innerText == "" && document.querySelector(`#box6`).innerText == "O" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box3`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box5`).innerText = "X"
                break
            }else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box1`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "O" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box3`).innerText == ""){
                document.querySelector(`#box3`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "O" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box3`).innerText == "O"){
                document.querySelector(`#box5`).innerText = "X"
                break
            }else if(document.querySelector(`#box7`).innerText == "" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box3`).innerText == "O"){
                document.querySelector(`#box7`).innerText = "X"
                break
            }else {
                while(true){
                    const number = Math.floor(Math.random() * 9 + 1);
                    if (document.querySelector(`#box${number}`).innerText == "") {
                        if (symbol == 1){
                            document.querySelector(`#box${number}`).innerText = "O";
                            break
                        } else {
                            document.querySelector(`#box${number}`).innerText = "X";
                            break
                        }
                    }
                }
            }
        }

        if (symbol == 1){
            if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box2`).innerText == "O" && document.querySelector(`#box3`).innerText == ""){
                document.querySelector(`#box3`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box2`).innerText == "" && document.querySelector(`#box3`).innerText == "O"){
                document.querySelector(`#box2`).innerText = "O"
                break
            } else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box2`).innerText == "O" && document.querySelector(`#box3`).innerText == "O"){
                document.querySelector(`#box1`).innerText = "O"
                break
            }else if(document.querySelector(`#box4`).innerText == "O" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box6`).innerText == ""){
                document.querySelector(`#box6`).innerText = "O"
                break
            }else if(document.querySelector(`#box4`).innerText == "O" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box6`).innerText == "O"){
                document.querySelector(`#box5`).innerText = "O"
                break
            }else if(document.querySelector(`#box4`).innerText == "" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box6`).innerText == "O"){
                document.querySelector(`#box4`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "O" && document.querySelector(`#box8`).innerText == "O" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "O" && document.querySelector(`#box8`).innerText == "" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box8`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "" && document.querySelector(`#box8`).innerText == "O" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box7`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box4`).innerText == "O" && document.querySelector(`#box7`).innerText == ""){
                document.querySelector(`#box7`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box4`).innerText == "" && document.querySelector(`#box7`).innerText == "O"){
                document.querySelector(`#box4`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box4`).innerText == "O" && document.querySelector(`#box7`).innerText == "O"){
                document.querySelector(`#box1`).innerText = "O"
                break
            }else if(document.querySelector(`#box2`).innerText == "O" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box8`).innerText == ""){
                document.querySelector(`#box8`).innerText = "O"
                break
            }else if(document.querySelector(`#box2`).innerText == "O" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box8`).innerText == "O"){
                document.querySelector(`#box5`).innerText = "O"
                break
            }else if(document.querySelector(`#box2`).innerText == "" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box8`).innerText == "O"){
                document.querySelector(`#box2`).innerText = "O"
                break
            }else if(document.querySelector(`#box3`).innerText == "O" && document.querySelector(`#box6`).innerText == "O" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "O"
                break
            }else if(document.querySelector(`#box3`).innerText == "O" && document.querySelector(`#box6`).innerText == "" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box6`).innerText = "O"
                break
            }else if(document.querySelector(`#box3`).innerText == "" && document.querySelector(`#box6`).innerText == "O" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box3`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "O" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box5`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box9`).innerText == "O"){
                document.querySelector(`#box1`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "O" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box3`).innerText == ""){
                document.querySelector(`#box3`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "O" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box3`).innerText == "O"){
                document.querySelector(`#box5`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "" && document.querySelector(`#box5`).innerText == "O" && document.querySelector(`#box3`).innerText == "O"){
                document.querySelector(`#box7`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box2`).innerText == "X" && document.querySelector(`#box3`).innerText == ""){
                document.querySelector(`#box3`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box2`).innerText == "" && document.querySelector(`#box3`).innerText == "X"){
                document.querySelector(`#box2`).innerText = "O"
                break
            } else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box2`).innerText == "X" && document.querySelector(`#box3`).innerText == "X"){
                document.querySelector(`#box1`).innerText = "O"
                break
            }else if(document.querySelector(`#box4`).innerText == "X" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box6`).innerText == ""){
                document.querySelector(`#box6`).innerText = "O"
                break
            }else if(document.querySelector(`#box4`).innerText == "X" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box6`).innerText == "X"){
                document.querySelector(`#box5`).innerText = "O"
                break
            }else if(document.querySelector(`#box4`).innerText == "" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box6`).innerText == "X"){
                document.querySelector(`#box4`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "X" && document.querySelector(`#box8`).innerText == "X" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "X" && document.querySelector(`#box8`).innerText == "" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box8`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "" && document.querySelector(`#box8`).innerText == "X" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box7`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box4`).innerText == "X" && document.querySelector(`#box7`).innerText == ""){
                document.querySelector(`#box7`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box4`).innerText == "" && document.querySelector(`#box7`).innerText == "X"){
                document.querySelector(`#box4`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box4`).innerText == "X" && document.querySelector(`#box7`).innerText == "X"){
                document.querySelector(`#box1`).innerText = "O"
                break
            }else if(document.querySelector(`#box2`).innerText == "X" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box8`).innerText == ""){
                document.querySelector(`#box8`).innerText = "O"
                break
            }else if(document.querySelector(`#box2`).innerText == "X" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box8`).innerText == "X"){
                document.querySelector(`#box5`).innerText = "O"
                break
            }else if(document.querySelector(`#box2`).innerText == "" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box8`).innerText == "X"){
                document.querySelector(`#box2`).innerText = "O"
                break
            }else if(document.querySelector(`#box3`).innerText == "X" && document.querySelector(`#box6`).innerText == "X" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "O"
                break
            }else if(document.querySelector(`#box3`).innerText == "X" && document.querySelector(`#box6`).innerText == "" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box6`).innerText = "O"
                break
            }else if(document.querySelector(`#box3`).innerText == "" && document.querySelector(`#box6`).innerText == "X" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box3`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box9`).innerText == ""){
                document.querySelector(`#box9`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "X" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box5`).innerText = "O"
                break
            }else if(document.querySelector(`#box1`).innerText == "" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box9`).innerText == "X"){
                document.querySelector(`#box1`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "X" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box3`).innerText == ""){
                document.querySelector(`#box3`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "X" && document.querySelector(`#box5`).innerText == "" && document.querySelector(`#box3`).innerText == "X"){
                document.querySelector(`#box5`).innerText = "O"
                break
            }else if(document.querySelector(`#box7`).innerText == "" && document.querySelector(`#box5`).innerText == "X" && document.querySelector(`#box3`).innerText == "X"){
                document.querySelector(`#box7`).innerText = "O"
                break
            }else {
                while(true){
                    const number = Math.floor(Math.random() * 9 + 1);
                    if (document.querySelector(`#box${number}`).innerText == "") {
                        if (symbol == 1){
                            document.querySelector(`#box${number}`).innerText = "O";
                            break
                        } else {
                            document.querySelector(`#box${number}`).innerText = "X";
                            break
                        }
                    }
                }
            }
        }
        break
    }
}
function winner(){
    const possibilities = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[7,5,3]];
    for (let n of possibilities){
        if (document.querySelector(`#box${n[0]}`).innerText == "X" && document.querySelector(`#box${n[1]}`).innerText == "X" && document.querySelector(`#box${n[2]}`).innerText == "X"){
            const answer = symbol == 1 ? 1 : 2
            return answer;
        }
        if (document.querySelector(`#box${n[0]}`).innerText == "O" && document.querySelector(`#box${n[1]}`).innerText == "O" && document.querySelector(`#box${n[2]}`).innerText == "O"){
            const answer = symbol == 1 ? 2 : 1
            return answer;
        }
    }
}
