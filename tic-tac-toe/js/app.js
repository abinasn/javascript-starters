const playerX = "playerX", playerO = "playerO";
const playerXElement = document.querySelector(`[aria-label="${playerX}"]`);
const playerOElement = document.querySelector(`[aria-label="${playerO}"]`);
let start = false;
let selected = playerX;

function createNewGame(rows, cols) {
    start = false;
    selected = playerX;
    return Array.from({ length: rows }, () => Array(cols).fill(null));
}

function onChangePlayer(player) {
    if (selected === player) return;
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
    selected = player;
}