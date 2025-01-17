const gridContainer = document.getElementById("grid-container");
const gridSizeInput = document.getElementById("gridSizeInput");
const gridSize = 800; // total size of the grid in pixels

function resetGridSize() {
    const input = parseInt(gridSizeInput.value);

    if (isNaN(input) || input < 1 || input > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    clearGrid();
    createGrid(input); // Create a grid with input x input squares
    hideForm();
}

function clearGrid() {
    gridContainer.innerHTML = ''; // Remove all existing grid items
}

function createGrid(size) {
    console.log(`Creating a grid with ${size} rows and ${size} columns`); // Log function entry
    const squareSize = gridSize / size; // Size of each square based on the input size
    console.log(`Calculated square size: ${squareSize}px`); // Log the calculated square size

    // Set grid container layout
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${size}, ${squareSize}px)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, ${squareSize}px)`;

    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);

        console.log(`Created grid item ${i + 1}`); // Log each grid item creation

        gridItem.addEventListener("mouseover", () => {
            gridItem.style.backgroundColor = randomHexColor();
        });
    }

    console.log(`Finished creating grid with ${size * size} items`); // Log function exit
}

// Function to show the popup form
function showForm() {
    document.getElementById("myForm").style.display = "block";
}

// Function to hide the popup form
function hideForm() {
    document.getElementById("myForm").style.display = "none";
}


function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

function randomHexColor() {
    let [r,g,b] = randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
}

// Initial grid creation
createGrid(16, 16);
