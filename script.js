const gridContainer = document.getElementById("grid-container");

function createGrid(rows, columns) {
    for (let i = 0; i < rows * columns; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = "yellow";
        });
        gridItem.addEventListener("mouseout", () => {
            setTimeout(() => {
                gridItem.style.backgroundColor = "";
            }, 500);
        });
    }
}

createGrid(16, 16);