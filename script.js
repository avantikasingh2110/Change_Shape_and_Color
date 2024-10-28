let color_div = document.getElementById("color_div");
let shape_div = document.getElementById("circle");
let color_change_btn = document.getElementById("color_change");
let shape_change_btn = document.getElementById("shape_change");

let arr = ["circle", "moon", "square", "rectangle", "triangle-up", "triangle-down", "triangle-left", "triangle-right", "hexagon", "heart", "diamond-shield", "cross", "diamond", "trapezoid"];

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