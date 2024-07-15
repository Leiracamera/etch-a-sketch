# etch-a-sketch
Etch-A-Sketch

This is a simple Etch-A-Sketch web application that allows 
users to draw by hovering over a grid of squares. 
The grid size can be customized, and the squares change to 
a random color as the user hovers over them.


Features: 

- Resizable Grid: Users can adjust the number of squares in the grid to create different drawing experiences.

- Random Color Generator: Each grid square changes to a random color when hovered over, making for a vibrant and dynamic drawing experience.

Code Overview

HTML
The HTML file contains the structure of the web application, including the grid container and the input form for resizing the grid.

CSS
The CSS file provides basic styling for the grid and form elements. You can customize the styles as needed.

JavaScript
The JavaScript file contains the logic for generating the grid, handling user input for resizing, and changing the colors of the grid squares on hover.

Key Functions
- resetGridSize(): Resets the grid size based on user input.
- clearGrid(): Clears all existing grid items.
- createGrid(rows, columns): Creates a grid with the specified number of rows and columns.
- randomInteger(max): Generates a random integer between 0 and the specified maximum value.
- randomRgbColor(): Generates a random RGB color.
- randomHexColor(): Generates a random hex color.

Acknowledgments
- This project is create as part of The Odin Project's Etch-A-Sketch assignment.
- The random color generator was implemented with help from 
[this tutorial on Tuts+](https://code.tutsplus.com/how-to-code-a-random-color-generator-in-javascript--cms-39861t).