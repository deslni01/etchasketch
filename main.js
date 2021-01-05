/*
Need to create a 16x16 grid of square divs:
    1. Make them using JS
    2. Best to put grid squares inside another 'container' div (e.g. 'board') above
    3. Options to make divs appear in grid: float/clear; inline-block; flexbox; css grid 
    4. Be careful with borders and margins, they can adjust size of squares
    5. If grid not being created, use console.log or dev tools

Set up a 'hover' effect so that the grid divs change color when mouse passes over them
    1. 'hovering' is what happens when mouse enters div and ends when mouse leaves
        it; set up event listeners for either of these as a starting point
    2. multiple ways to change the color of the divs:
        - add a new class to the div 
        - change the div background color using JS 

Add a button at the top of the screen to clear the current grid and send a popup
asking for how many squares per side for new grid. The new grid should be generated
in the SAME TOTAL SPACE AS BEFORE (e.g. 960px wide).
    TIP: Set the limit for user input to a max of 100
    1. Research button tags in HTML and how you can make a JS function run when
        one is clicked
    2. Also check out prompts
    3. You should be able to enter 64 and have a brand new 64x64 grid pop up 
        without changing the total amount of pixels used

(OPTIONAL): Instead of just changing the grid color from black to white (for eks),
have each pass through it witht he mouse change to a random RGB value. Then have
each pass just add another 10% of black to it so after 10 passes it is completely
black.

Push to GitHub
*/


// Make new divs inside 'board' - default 16x16
    gridSize(divCount);

// Organize grid - CSS for #board ?

// event listener for 'hover' to assign a new class to class the divs
    function paintGrid() {
        let paint = document.getElementsByClassName('div-grid');
        for (let i = 0; i < paint.length; i++) {
            paint[i].addEventListener("mouseenter", function(event) {
                paint[i].style.backgroundColor = 'black';
            });
        }
    }


// Button to clear the current grid and send a popup asking for how many squares
    // onclick event listener
        // execute clearGrid()
        // execute gridSize()
        // console.log('board cleared');
    document.getElementById('clearBtn').addEventListener("click", function() {
        clearGrid();
    });
    
    function clearGrid() {
        const emptyGrid = document.getElementById('grid');
        emptyGrid.innerHTML = '';
        const resetGrid = document.getElementsByClassName('div-grid');
    
        for (let i = 0; i < resetGrid.length; i++) {
            resetGrid[i].style.backgroundColor = 'rgb(170, 170, 170)';
        }
        gridSize(divCount);
    }

// function to create new grid with parameters
    function gridSize(divCount) {
    
        // prompt for new grid size       
        // let divCount = prompt('How many boxes wide?', '0');
        divCountTotal = divCount * divCount;
    
        // divide board length by number of divs to set size of divs
        let divWidth = 800 / divCount;
    
        // set max to 100
        if (divCount >= 101) {
            alert('Max of 100!');
        } else {
        for (let i = 0; i < divCountTotal; i++) {
            // JS create element div
            const divGrid = document.createElement('div');
            divGrid.classList.add('div-grid');
            divGrid.style.width = divWidth + 'px';
            divGrid.style.height = divWidth + 'px';
            grid.style.gridTemplateColumns = 'repeat(' + (divCount) + ', 1fr)';
            grid.appendChild(divGrid);
        }
        }
        paintGrid();           
    }

    // function to start default:
    document.getElementById('sizeBtn').addEventListener("click", function() {
        newGridSize();
    });
    

/*
const btn = document.querySelector('#btn');
btn.addEventListen('click', function() {

}
*/