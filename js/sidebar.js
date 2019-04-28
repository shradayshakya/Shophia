var sideBar = document.getElementById("sideBar");

var burgerButton = document.getElementById("burgerButton");


var crossButton = document.getElementById("crossSidebar");

burgerButton.onclick = function(){
    sideBar.style.display = "block";
    sideBar.style.width = "200px";
}

crossButton.onclick = function(){
    sideBar.style.display = "none";
    sideBar.style.width = "0";
}