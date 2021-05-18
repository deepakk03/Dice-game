// for dice 1 //
var randomNumber = Math.floor(Math.random() * 6)+1;
var randomImg = "images/dice" + randomNumber + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImg);


// for dice 2 //
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomImg2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImg2);

if (randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins 🏆"
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🏆"
}
else{
    document.querySelector("h1").innerHTML = "Draw"
}
