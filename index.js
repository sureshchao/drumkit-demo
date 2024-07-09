var drumKit = document.querySelectorAll(".drum");
var audioFiles = ['./sounds/crash.mp3', './sounds/kick-bass.mp3', './sounds/snare.mp3', './sounds/tom-1.mp3', './sounds/tom-2.mp3', './sounds/tom-3.mp3'
    , './sounds/tom-4.mp3'];
var audioObjs = [];
audioFiles.forEach(function (elem) {
    audioObjs.push(new Audio(elem))
});

for (let i = 0; i < drumKit.length; ++i) {
    drumKit[i].addEventListener("click", function () {
        alert("playing " + i);

        this.style.color = "white";
        if (i < audioObjs.length)
            audioObjs[i].play();
    });
}
