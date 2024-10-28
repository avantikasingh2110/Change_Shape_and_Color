let color_div = document.getElementById("color_div");
let shape_div = document.getElementById("shape_div");
let color_change_btn = document.getElementById("color_change");
let shape_change_btn = document.getElementById("shape_change");

let arr = ["heart", "square", "rectangle", "circle", "oval", "triangle-up", "triangle-down", "triangle-left", "triangle-right", "triangle-topleft", "triangle-topright", "triangle-bottomleft", "triangle-bottomright", "trapezoid", "parallelogram", "star-six", "star-five", "pentagon", "hexagon", "octagon", "diamond-shield", "cross"];

color_change_btn.addEventListener("click", function(){
    color_div.style.backgroundColor = randomColor();
})

function randomColor(){
    let letters = "0123456789ABCDEF";
    let colorCodelength = 6;
    let colorCode = "#";
    for(let i = 0; i < colorCodelength; i++){
        colorCode += letters[Math.floor(Math.random() * letters.length)];
    }
    return colorCode;
}

shape_change_btn.addEventListener("click", function(){
    let randomShape = arr[Math.floor(Math.random() * arr.length)];
    shape_div.id = randomShape;
})