const playerX = "playerX", playerO = "playerO";
const playerXElement = document.querySelector(`[aria-label="${playerX}"]`);
const playerOElement = document.querySelector(`[aria-label="${playerO}"]`);
let start = false;
let selectedPlayer = playerX;
let game = [], rows = 3, cols = 3

function onCreateNewGame() {
    start = false;
    selectedPlayer = playerX;
    game = Array.from({ length: rows }, () => Array(cols).fill(null));
}

function onClearGame(){
    document.querySelectorAll(".grid-btns").forEach(btn=>btn.remove());
}

function onCreateGrid(){
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
    for(let i=0;i<rows;i++){
        let classes = [...classList]
        if(i==rows-1){
            classes.shift();
        }
        for(let j=0;j<cols;j++){
            const button = document.createElement("button");
            if(j==cols-1){
                classes.splice(classes.findIndex(c=>c==="border-r-2"),1)
            }
            button.classList.add(...classes);
            button.id=`${i}-${j}`;
            button.addEventListener("click", ()=>{
                onClickGrid(i,j)
            })
            element.appendChild(button);
        }
    }
}


function onChangePlayer(player) {
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


function onClickGrid(r,c){
    const btn = document.getElementById(`${r}-${c}`);
    if(!btn) return;
    let div = document.createElement("div");
    div.classList.add("grid-data");
    div.classList.add(selectedPlayer === playerX ? "x-shape" : "o-shape");
    btn.appendChild(div);
    onChangePlayer(selectedPlayer === playerX ? playerO : playerX)
}

function init(){
    start = false, game = [];
    onClearGame();
    onCreateNewGame();
    onCreateGrid();
    onChangePlayer(playerX)
}

init()