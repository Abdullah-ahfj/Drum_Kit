let numberOfDrumButton = document.querySelectorAll(".drum").length;

//press key to play
document.addEventListener("keypress", event => {

    let soundKey = event.key.toLowerCase();
    pressBtnClass(soundKey);
    
    switch (soundKey) {
        case "w":
            let audioTom1 = new Audio("sounds/tom-1.mp3");
            audioTom1.play();
            break;

        case "a":
            let audioTom2 = new Audio("sounds/tom-2.mp3");
            audioTom2.play();
            break;

        case "s":
            let audioTom3 = new Audio("sounds/tom-3.mp3");
            audioTom3.play();
            break;

        case "d":
            let audioTom4 = new Audio("sounds/tom-4.mp3");
            audioTom4.play();
            break;

        case "j":
            let audioCrash = new Audio("sounds/crash.mp3");
            audioCrash.play();
            break;

        case "k":
            let audioKickBass = new Audio("sounds/kick-bass.mp3");
            audioKickBass.play();
            break;

        case "l":
            let audioSnare = new Audio("sounds/snare.mp3");
            audioSnare.play();
            break;

        default:
            console.log(btnInnerHtml);
            break;
    }
});

// click-on to play
for (let i = 0; i < numberOfDrumButton; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let btnInnerHtml = this.innerHTML;
        
        switch (btnInnerHtml) {
            case "w":
                let audioTom1 = new Audio("sounds/tom-1.mp3");
                audioTom1.play();
                break;

            case "a":
                let audioTom2 = new Audio("sounds/tom-2.mp3");
                audioTom2.play();
                break;

            case "s":
                let audioTom3 = new Audio("sounds/tom-3.mp3");
                audioTom3.play();
                break;

            case "d":
                let audioTom4 = new Audio("sounds/tom-4.mp3");
                audioTom4.play();
                break;

            case "j":
                let audioCrash = new Audio("sounds/crash.mp3");
                audioCrash.play();
                break;

            case "k":
                let audioKickBass = new Audio("sounds/kick-bass.mp3");
                audioKickBass.play();
                break;

            case "l":
                let audioSnare = new Audio("sounds/snare.mp3");
                audioSnare.play();
                break;

            default:
                console.log(btnInnerHtml);
                break;
        }
    });
    
}

function pressBtnClass(key) {
    document.querySelector(`.${key}`).classList.add("pressed");
    
    setTimeout(() => {
        document.querySelector(`.${key}`).classList.remove("pressed")
    }, 100);

}
