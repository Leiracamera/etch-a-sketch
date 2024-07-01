const gridContainer = document.getElementById("grid-container");

function createGrid(rows, columns) {
    for (let i = 0; i < rows * columns; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = "yellow";
        });


      /* gridItem.addEventListener("mouseout", () => {
            setTimeout(() => {
                gridItem.style.backgroundColor = "";
            }, 500);
        }); */
    }
}

// Function to show the popup form
function showForm() {
    document.getElementById("myForm").style.display = "block";
}

// Function to hide the popup form
function hideForm() {
    document.getElementById("myForm").style.display = "none";
}


createGrid(16, 16);