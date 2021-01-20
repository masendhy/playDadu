//Player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //  mengacak angka 1 - 6

var randomDaduImage = "dadu" + randomNumber1 + ".png"; // mengacak file png (daduNomor.png)

var randomImageSource = "images/" + randomDaduImage; // mengacak file png dari folder images (images/daduNomor.png)

var image1 = document.querySelectorAll("img")[0]; // menampilkan images

image1.setAttribute("src", randomImageSource);


// Player2

var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImageSource2 = "images/dadu" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// Winner

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = " 🤦🏼‍♂️ Yaaah Player 2 Kalah";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " 🤦🏻‍♀️ Wadoow Player 1 Kalah";
} else {
    document.querySelector("h1").innerHTML = " 🤝 Ups Draw niiii"
}