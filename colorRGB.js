// var colors = [
//     'rgb(255, 0, 0)',
//     'rgb(255, 255, 0)',
//     'rgb(0, 255, 0)',
//     'rgb(0, 255, 255)',
//     'rgb(0, 0, 255)',
//     'rgb(255, 0, 255)',
// ];

var colors = generateRandomColors(6);
var gameMode = 6;
var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var textPickedColor = document.getElementById('pickedColor');
var message = document.getElementById('message');
var main_content = document.getElementById('main-content');
var resetButton = document.getElementById('resetButton');
var easyButton = document.getElementById('easyBtn');
var hardButton = document.getElementById('hardBtn');

easyButton.addEventListener('click', function() {
    this.classList.add('selected');
    hardButton.classList.remove('selected');
    gameMode = 3;
    colors = generateRandomColors(gameMode);
    for(var i = 0; i < squares.length; i++) {
        //Setting colors
        if(colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }        
    }
    pickedColor = pickColor();
    textPickedColor.textContent = pickedColor;
    message.textContent = "";
    resetButton.textContent = "New Colors";
    main_content.style.backgroundColor = 'steelblue';
});

hardButton.addEventListener('click', function() {
    this.classList.add('selected');
    easyButton.classList.remove('selected');
    gameMode = 6;
    colors = generateRandomColors(gameMode);
    for(var i = 0; i < squares.length; i++) {
        //Setting colors
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    }
    pickedColor = pickColor();
    textPickedColor.textContent = pickedColor;
    message.textContent = "";
    resetButton.textContent = "New Colors";
    main_content.style.backgroundColor = 'steelblue';
});

//Reset the game
resetButton.addEventListener('click', function() {
    //generate new colors    
    colors = generateRandomColors(gameMode);
    //set the new picked color
    pickedColor = pickColor();
    textPickedColor.textContent = pickedColor;
    message.textContent = "";
    this.textContent = "New Colors";
    //set all the colors to squares
    for(var i = 0; i < squares.length; i++) {
        //Setting colors
        squares[i].style.backgroundColor = colors[i];
    }
    //reset the heading background
    main_content.style.backgroundColor = 'steelblue';
});

//Setting picked color to the heading
textPickedColor.textContent = pickedColor;

for(var i = 0; i < squares.length; i++) {
    //Setting colors
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener('click', function(){
        //core logic
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
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