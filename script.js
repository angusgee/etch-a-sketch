const container = document.getElementById("container");
const numSquares = 16;
const squaresPerRow = Math.sqrt(numSquares);
const btn = document.getElementById("create-grid-btn");

function createSquares(numSquares) {
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.minHeight = `calc(${100 / squaresPerRow}% - 5.5px)`;
        square.style.minWidth = `calc(${100 / squaresPerRow}% - 5.5px)`;
        container.appendChild(square);
    }
}

createSquares(numSquares);

btn.addEventListener("click", () => {
    // e.preventDefault();
    console.log(">> clicked! changing grid");
});
