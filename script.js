const gridContainer = document.getElementById("grid-container");

function createGrid(rows, columns) {
    for (let i = 0; i < rows * columns; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
}

createGrid(16, 16);