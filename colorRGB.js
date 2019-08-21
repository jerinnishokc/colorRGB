var colors = [];
var gameMode = 6;
var pickedColor;
var squares = document.querySelectorAll('.square');
var textPickedColor = document.getElementById('pickedColor');
var message = document.getElementById('message');
var main_content = document.getElementById('main-content');
var resetButton = document.getElementById('resetButton');
var modeButtons = document.querySelectorAll('.modeBtn');

init();

function init() {
    setupButton();
    setupSquares();
    reset();
}

function setupSquares() {    
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function () {
            //core logic
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                //call a function to change the color of all squares to the chosen color
                changeColor(clickedColor);
                message.textContent = 'Correct!';
                main_content.style.backgroundColor = clickedColor;
                resetButton.textContent = 'Play Again?';
            }
            else {
                this.style.backgroundColor = '#232323';
                message.textContent = 'Try Again!';
            }
        });
    }
}

function setupButton() {
    //Adding Event listeners to all the mode buttons
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function () {
            //removing the selected class from both the buttons
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            //adding the selected class for the clicked button
            this.classList.add('selected');
            //generate random colors
            this.textContent.toUpperCase() === 'EASY' ? gameMode = 3 : gameMode = 6;
            reset();
        });
    }
    //Reset the game
    resetButton.addEventListener('click', function () {
        reset();
    });
}

function reset() {
    colors = generateRandomColors(gameMode);

    //set all the colors to the squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
    }

    //pick a random color
    pickedColor = pickColor();
    //set the random color as the picked color
    textPickedColor.textContent = pickedColor;
    //restore the h1 color
    main_content.style.backgroundColor = 'steelblue';
    //set the reset button's text to new colors
    resetButton.textContent = "New Colors";
    //reset the text content
    message.textContent = "";
}

function changeColor(color) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

//Generate random colors array
function generateRandomColors(num) {
    var arr = [];

    for(var i = 0; i < num; i++) {
        //get a random color and push it into the arr
        arr.push(randomColor());
    }

    //return the array of random colors
    return arr;
}

//Generate a random color
function randomColor() {
    //red
    var r = Math.floor(Math.random() * 256);
    //green
    var g = Math.floor(Math.random() * 256);
    //blue
    var b = Math.floor(Math.random() * 256);
    //return the random color
    return "rgb(" + r + ", " + g + ", " + b + ")";
}