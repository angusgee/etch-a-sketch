const container = document.getElementById("container");
const numSquares = document.getElementById("num-squares-dropdown").value;
const squaresPerRow = Math.sqrt(numSquares);
const btn = document.getElementById("create-grid-btn");

function createSquares(numSquares, squaresPerRow) {
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.minHeight = `calc(${100 / squaresPerRow}% - 5.5px)`;
        square.style.minWidth = `calc(${100 / squaresPerRow}% - 5.5px)`;
        container.appendChild(square);
    }
}

createSquares(numSquares, squaresPerRow);

btn.addEventListener("click", () => {
    const dropdownValue = document.getElementById("num-squares-dropdown").value;
    const squaresPerRow = Math.sqrt(dropdownValue);
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    createSquares(dropdownValue, squaresPerRow);
});
