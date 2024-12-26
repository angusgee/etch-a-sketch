const container = document.getElementById("container");
const numSquares = document.getElementById("num-squares-dropdown").value;
const squaresPerRow = Math.sqrt(numSquares);
const createGridBtn = document.getElementById("create-grid-btn");
const clearGridBtn = document.getElementById("clear-grid-btn");
const colourNames = [
    "--clr-light-gray",
    "--clr-medium-gray",
    "--clr-dark-gray",
    "--clr-black",
    "--clr-purple",
    "--clr-violet",
    "--clr-blue",
    "--clr-purple",
    "--clr-violet",
    "--clr-blue",
];

function changeColour(el) {
    const randInt = parseInt(Math.random() * 10);
    el.style.backgroundColor = `var(${colourNames[randInt]})`;
}

function createSquares(numSquares, squaresPerRow) {
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.minHeight = `calc(${100 / squaresPerRow}% - 5.5px)`;
        square.style.minWidth = `calc(${100 / squaresPerRow}% - 5.5px)`;
        square.addEventListener("mouseenter", () => {
            changeColour(square);
        });
        container.appendChild(square);
    }
}

createGridBtn.addEventListener("click", () => {
    const dropdownValue = document.getElementById("num-squares-dropdown").value;
    const squaresPerRow = Math.sqrt(dropdownValue);
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    createSquares(dropdownValue, squaresPerRow);
});

clearGridBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    for (const square of squares) {
        square.style.backgroundColor = "var(--clr-light-blue)";
    }
});

createSquares(numSquares, squaresPerRow);
