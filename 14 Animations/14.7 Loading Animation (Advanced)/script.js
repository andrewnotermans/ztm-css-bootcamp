//Function to generate random color
function getRandomColor() {
    return '#' + Math.random().toString(16).slice(-6);
}

// Function to set random colors to the squares
function setRandomColors() {
    document.querySelector('.color1').style.backgroundColor = getRandomColor();
    document.querySelector('.color2').style.backgroundColor = getRandomColor();
    document.querySelector('.color3').style.backgroundColor = getRandomColor();
}

// Initialize with random colors
setRandomColors();

// Continue to change colors every 2 seconds
setInterval(setRandomColors, 2000);