// constants for query selector
var studentId = document.querySelector('#myStudentId');
var customNumber = document.querySelector('#customNumber');
var customColor = document.querySelector('.custColor');
var randomColor = document.querySelector('.randColor');
var imageSelector = document.querySelector('#imageSelect');
var images = document.querySelector('#images');
var page = document.querySelector('html');

// An Array to store links to each image
var files = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];

// function to change bg color from user input and add student id
function changeCustomColor(customValue) {
    if(customValue < 0 || customValue > 100){
        page.style.backgroundColor = "red";
    }
    else if(customValue < 20){
        page.style.backgroundColor = "green"
    }
    else if(customValue < 40){
        page.style.backgroundColor = "blue"
    }
    else if(customValue < 60){
        page.style.backgroundColor = "orange"
    }
    else if(customValue < 80){
        page.style.backgroundColor = "purple"
    }
    else if(customValue <= 100){
        page.style.backgroundColor = "yellow"
    }
    studentId.textContent = "Owen DeHaan | ID: 1189401";
    // Depending on the number value, the background color will change to a certain color
}

// function to change bg color from random no.
function changeRandomColor() {
var randomBackground = Math.round(Math.random() * 100 ) + 1;
changeCustomColor(randomBackground);
}

// function to generate options for select list
function addList() {
    if(imageSelector.length <= 1){
        for(var i = 0; i < files.length; i++){
            var imageType = document.createElement("option");
            imageType.value = files[i];
            imageType.text = "image " + (i + 1);
            imageSelector.appendChild(imageType);
        }
    }
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}

// function to change image
function changeImage() {
var menuValue = imageSelector.value;
images.setAttribute("src", menuValue);
}

// event listeners for on click event of buttons and select
customColor.addEventListener("click", function(){
    changeCustomColor(customNumber.value);
});
randomColor.addEventListener("click", changeRandomColor);

// event listeners for on change event of select
imageSelector.addEventListener("click", addList);
imageSelector.addEventListener("change", changeImage);