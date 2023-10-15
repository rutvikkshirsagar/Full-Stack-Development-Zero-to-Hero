// Way 2

var rand1 = Math.floor(Math.random()*6)+1;
var rand2 = Math.floor(Math.random()*6)+1;

var path1 = "./images" + "/dice" + rand1 +".png";
var path2 = "./images" + "/dice" + rand2 +".png";

document.querySelectorAll("img")[0].setAttribute("src",path1);
document.querySelectorAll("img")[1].setAttribute("src",path2);

if(rand1>rand2){
    document.querySelector("h1").innerHTML = "🚩Player1 WIN";
}
else if(rand2>rand1){
    document.querySelector("h1").innerHTML ="Player2 WIN 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw Match✅";
}



// var rand1 = Math.floor(Math.random()*6)+1;
// var rand2 = Math.floor(Math.random()*6)+1;

// switch(rand1,rand2){
//     case 1:
//         path1 = "./images/dice1.png";
//         break;
//     case 2:
//         path1 = "./images/dice2.png";
//         break;
//     case 3:
//         path1 = "./images/dice3.png";
//         break;
//     case 4:
//         path1 = "./images/dice4.png";
//         break;
//     case 4:
//         path1 = "./images/dice5.png";
//         break;
//     default:
//         path1 = "./images/dice6.png";
// }
// switch(rand2){
//     case 1:
//         path2 = "./images/dice1.png";
//         break;
//     case 2:
//         path2 = "./images/dice2.png";
//         break;
//     case 3:
//         path2 = "./images/dice3.png";
//         break;
//     case 4:
//         path2 = "./images/dice4.png";
//         break;
//     case 4:
//         path2 = "./images/dice5.png";
//         break;
//     default:
//         path2 = "./images/dice6.png";
// }

// if(rand1>rand2){
//     document.querySelector("h1").innerHTML = "Player1 is Winner";
// }
// else if(rand2>rand1){
//     document.querySelector("h1").innerHTML = "Player2 is Winner";
// }
// else{
//     document.querySelector("h1").innerHTML = "Match Draw";
// }
// document.getElementsByClassName("img1")[0].setAttribute("src",path1);
// document.getElementsByClassName("img2")[0].setAttribute("src",path2);





