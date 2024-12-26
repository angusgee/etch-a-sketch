const container = document.getElementById("container");
const numSquares = 4;
const squaresPerRow = Math.sqrt(numSquares);
const btn = document.getElementById("create-grid-btn");

function createSquares(numSquares, squaresPerRow) {
    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.minHeight = `calc(${100 / squaresPerRow}% - 5.5px)`;
        // console.log("min height calculated to: ", square.style.minHeight);
        square.style.minWidth = `calc(${100 / squaresPerRow}% - 5.5px)`;
        // console.log("min height calculated to: ", square.style.minWidth);
        container.appendChild(square);
    }
}

createSquares(numSquares, squaresPerRow);

btn.addEventListener("click", () => {
    const dropdownValue = document.getElementById("num-squares-dropdown").value;
    // console.log(">>> value selected: ", dropdownValue);
    const squaresPerRow = Math.sqrt(dropdownValue);
    // console.log(">>> squares per row calculated to: ", squaresPerRow);
    // console.log(">> clicked! changing grid to", dropdownValue);
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }
    createSquares(dropdownValue, squaresPerRow);
});
