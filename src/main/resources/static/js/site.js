console.log("Hello from js");
var users = [
    {"name" : "John", "gender" : "Male", "img" : "https://www.shutterstock.com/image-vector/portrait-girl-beautiful-long-hair-260nw-1969681783.jpg"},
    {"name" : "Jane", "gender" : "Female", "img" : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkosiVeorClpqBo5kOw6YOHze81n8ObhOZQ&s"}
];

var currentUserIndex = 0;

function toggleCard(){
    currentUserIndex =(currentUserIndex + 1) % 2;
    var user = users[currentUserIndex];

    // DOM Manipulation
    document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").innerHTML = user.gender;
    document.getElementById("userName").innerHTML = user.name;
}