for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttoninnerhtml = this.innerHTML;
    change(buttoninnerhtml);
    animation(buttoninnerhtml);
  });
}

document.addEventListener("keypress", function (event) {
  change(event.key);
  animation(event.key);
});

function change(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    default:
      console.log("buttoninnerhtml");
  }
}

function animation(parameter) {
  document.querySelector("." + parameter).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + parameter).classList.remove("pressed");
  }, 100);
}
// function macha() {

//   // var audio = new Audio("./sounds/tom-1.mp3");
//   // audio.play();
