const playerX = "playerX", playerO = "playerO";
const playerXElement = document.querySelector(`[aria-label="${playerX}"]`);
const playerOElement = document.querySelector(`[aria-label="${playerO}"]`);
let startGame = false;
let selectedPlayer = playerX;
let gameData = {}, rows = 3, cols = 3;
const winningArray = [
    ["00", "01", "02"],
    ["10", "11", "12"],
    ["20", "21", "22"],
    ["00", "10", "20"],
    ["01", "11", "21"],
    ["02", "12", "22"],
    ["00", "11", "22"],
    ["02", "11", "20"],
];

function onCreateNewGame() {
    startGame = false;
    selectedPlayer = playerX;
    gameData = {};
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            gameData[`${i}${j}`.toString()] = null
        }
    }
}

function onClearGame() {
    document.querySelectorAll(".grid-btns").forEach(btn => btn.remove());
    onDisablePlayer(playerX, "remove");
    onDisablePlayer(playerO, "remove");
    onEndGame(null, "remove");
}

function onCreateGrid() {
    const element = document.getElementById("tic-tac-grid");
    let classList = [
        "border-b-2",
        "border-r-2",
        "border-border",
        "dark:border-dark-border",
        "hover:bg-violet-200",
        "dark:hover:bg-dark-hover",
        "transition-colors",
        "duration-300",
        "aspect-square",
        "flex",
        "justify-center",
        "items-center",
        "grid-btns"
    ]
    for (let i = 0; i < rows; i++) {
        let classes = [...classList]
        if (i == rows - 1) {
            classes.shift();
        }
        for (let j = 0; j < cols; j++) {
            const button = document.createElement("button");
            if (j == cols - 1) {
                classes.splice(classes.findIndex(c => c === "border-r-2"), 1)
            }
            button.classList.add(...classes);
            button.id = `${i}-${j}`;
            button.addEventListener("click", () => {
                onClickGrid(i, j)
            })
            element.appendChild(button);
        }
    }
}

function onDisablePlayer(player, action) {
    let ele = player === playerX ? playerXElement : playerOElement;
    ele.classList[action]("opacity-25", "cursor-not-allowed")
}

function onEndGame(result, action) {
    const endGameDiv = document.getElementById("end");
    const endGameDivInnerText = document.getElementById("end-text");
    if (action === "add") {
        let text = "";
        if (result === 'X') text = "Player X won";
        else if (result === 'O') text = "Player O won";
        else text = "Game ends"
        endGameDivInnerText.innerText = text;
        endGameDiv.classList.remove("invisible");
        endGameDiv.classList.add("visible");
    } else {
        endGameDiv.classList.remove("visible");
        endGameDiv.classList.add("invisible");
    }
}

function onChangePlayer(player, callType) {
    if (callType === "click" && startGame) return;
    const playerXClasses = ["border-playerX-primary", "text-playerX-primary", "dark:text-playerX-primary", "dark:border-playerX-primary"];
    const playerOClasses = ["border-playerO-primary", "text-playerO-primary", "dark:text-playerO-primary", "dark:border-playerO-primary"];
    const activeClasses = [
        "border-b-2"
    ];
    const inactiveClasses = [
        "text-gray-500",
        "dark:text-gray-400",
        "hover:text-primary",
        "dark:hover:text-dark-primary"
    ];
    if (player === playerX) {
        playerXElement.classList.remove(...inactiveClasses);
        playerXElement.classList.add(...activeClasses, ...playerXClasses);
        playerOElement.classList.remove(...activeClasses, ...playerOClasses);
        playerOElement.classList.add(...inactiveClasses);
    } else {
        playerOElement.classList.remove(...inactiveClasses);
        playerOElement.classList.add(...activeClasses, ...playerOClasses);
        playerXElement.classList.remove(...activeClasses, ...playerXClasses);
        playerXElement.classList.add(...inactiveClasses);
    }
    selectedPlayer = player;
}



function onCheckGame() {
    for (let i = 0; i < winningArray.length; i++) {
        const [x,y,z] = winningArray[i];
        if(gameData[x] === gameData[y] && gameData[x] === gameData[z]){
            console.log(x,y,z, gameData[x])
            return gameData[x]
        }
    }
    return null;
}

function onClickGrid(row, col) {
    const btn = document.getElementById(`${row}-${col}`);

    if (!btn) return;
    let div = document.createElement("div");
    div.classList.add("grid-data");
    div.classList.add(selectedPlayer === playerX ? "x-shape" : "o-shape");
    btn.appendChild(div);
    onChangePlayer(selectedPlayer === playerX ? playerO : playerX, "swap");
    onDisablePlayer(selectedPlayer === playerX ? playerX : playerO, "remove");
    onDisablePlayer(selectedPlayer === playerX ? playerO : playerX, "add");
    if (!startGame) startGame = true;
    gameData[`${row}${col}`] = selectedPlayer === playerX ? "O" : "X";
    const result = onCheckGame();
    if(result){
        onEndGame(result, "add");
    }
}

function init() {
    startGame = false, gameData = [];
    onClearGame();
    onCreateNewGame();
    onCreateGrid();
    onChangePlayer(playerX, "swap");
}

init()