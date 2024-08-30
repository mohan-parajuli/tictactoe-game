let button = document.querySelectorAll(".btn");
let reset = document.querySelector(".resetprimary");
let msgcontain = document.querySelector(".msgcontainer");
let title = document.querySelector(".title");
let newgame = document.querySelector(".newgame");
let drawcontain = document.querySelector(".drawcontainer");
let drew = document.querySelector(".draw");
let redrgames=document.querySelector(".redrgame")


let count = 0;
let turn = true;
const winpattern = [
    [0, 1, 2], [0, 3, 6], [1, 4, 7], [2, 6, 8], [3, 4, 5], [6, 7, 8], [0, 4, 8], [2, 4, 6]
];


button.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log("button clicked");
        if (turn) {
            btn.innerText = "O";
            btn.classList.add("font-color1");
            btn.classList.remove("font-color2");
            turn = false;
        }
        else {
            btn.innerText = "X";
            btn.classList.add("font-color2");
            turn = true;
        }
        btn.disabled = true;
        count++;
        checkwinner();
    }
    )
});

const showWinner = (winner) => {
    title.innerText = `Congratulation, ${winner} win the game`;
    msgcontain.classList.remove("hide");
    disablebtun();
}

const renable=()=>{
    turn = true;
    count=0;
    for (let btn of button) {
        btn.disabled = false;
        btn.innerText = "";
        msgcontain.classList.add("hide");
        drawcontain.classList.add("hide");
    }
}

const showdraw = () => {
    drew.innerText = ("Its Draw!");
    drawcontain.classList.remove("hide");
    redrgames.addEventListener("click", renable);

}

const disablebtun = () => {
    for (let btn of button) {
        btn.disabled = true;
    }
}

const enable = () => {
    turn = true;
    count=0;
    for (let btn of button) {
        btn.disabled = false;
        btn.innerText = "";
        msgcontain.classList.add("hide");
        drawcontain.classList.add("hide");
    }
}

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pos1 = button[pattern[0]].innerText;
        let pos2 = button[pattern[1]].innerText;
        let pos3 = button[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner");
                showWinner(pos1);
            }
            if (count == 9 && pos1 != pos2 && pos2 != pos3) {
                showdraw();
            }
        }

    }

    reset.addEventListener("click", enable);
    newgame.addEventListener("click", enable);

}
