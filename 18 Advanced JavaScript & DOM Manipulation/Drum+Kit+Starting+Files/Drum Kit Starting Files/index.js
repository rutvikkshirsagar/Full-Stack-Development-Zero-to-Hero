for(var i = 0; i<=document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var btnInnerHTML = this.innerHTML;
        makeSound(btnInnerHTML);
        btnAnimation(btnInnerHTML);
    });
    document.addEventListener("keydown", function(event){
        var key = event.key;
        makeSound(event.key);
        btnAnimation(event.key);
    });
}

function makeSound(key){
    switch(key){
        case "w":
            var audiow = new Audio("./sounds/kick-bass.mp3");
            audiow.play();
            break;
        case "a":
            var audioa = new Audio("./sounds/tom-2.mp3");
            audioa.play();
            break;
        case "s":
            var audios = new Audio("./sounds/tom-3.mp3");
            audios.play();
            break;
        case "d":
            var audiod = new Audio("./sounds/tom-4.mp3");
            audiod.play();
            break;
        case "j":
            var audioj = new Audio("./sounds/snare.mp3");
            audioj.play();
            break;
        case "k":
            var audiok = new Audio("./sounds/crash.mp3");
            audiok.play();
            break;
        case "l":
            var audiok = new Audio("./sounds/tom-1.mp3");
            audiok.play();
        default:
            console.log(btnInnerHTML);
    }
}

function btnAnimation(currentKey){
    var activeBtn = document.querySelector("."+currentKey);
    activeBtn.classList.add("pressed");
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    },100);
}

// function anotherAddEventListner(typeOf, callback){
//     var eventThatHappend = {
//         typeof: "keydown",
//         duration: 3,
//         key: "p"
//     };

//     if(eventThatHappend.typeof === typeOf){
//         callback(eventThatHappend);
//     }
// }

// anotherAddEventListner("keydown", function(event){
//     console.log(event);
// });

// document.addEventListner("keydown", function(event){
//     var key = event.key;
//     aler("Key pressed is "+ key);
// });