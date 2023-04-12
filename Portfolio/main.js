// main.js

let images = ['images/project1.png', 
            'images/project2.png', 
            'images/project3.png',
            'images/project4.png', 
            'images/project5.png',];

let i = 0;
document.getElementById("image").src = images[i];


let leftArrow = document.getElementById("leftArrow");
let rightArrow = document.getElementById("rightArrow");

leftArrow.addEventListener("click", leftClick);

rightArrow.addEventListener("click", rightClick)

function rightClick(event){
    if(i != images.length - 1){
        i++;
        document.getElementById("image").src = images[i];
    }else{
        i = 0;
        document.getElementById("image").src = images[i];
    }
}

function leftClick(event){
    if(i > 0){
        i--;
        document.getElementById("image").src = images[i];
    }else{
        i = images.length - 1;
        document.getElementById("image").src = images[i];
    }
}