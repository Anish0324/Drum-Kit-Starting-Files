for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonani(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  makesound(event.key);
  buttonani(event.key);
});

function makesound(event) {
  switch (event) {
    case "w":
      var t1 = new Audio("sounds/tom-1.mp3");
      t1.play();
      break;
    case "a":
      var t2 = new Audio("sounds/tom-2.mp3");
      t2.play();
      break;
    case "s":
      var t3 = new Audio("sounds/tom-3.mp3");
      t3.play();
      break;
    case "d":
      var t4 = new Audio("sounds/tom-4.mp3");
      t4.play();
      break;
    case "j":
      var cr = new Audio("sounds/crash.mp3");
      cr.play();
      break;
    case "k":
      var ki = new Audio("sounds/kick-bass.mp3");
      ki.play();
      break;
    case "l":
      var sn = new Audio("sounds/snare.mp3");
      sn.play();
      break;

    default:
      console.log(event);
  }
}

function buttonani(currentkey){
  var flas = document.querySelector("."+currentkey);
  flas.classList.add("pressed");
  setTimeout(function(){
    flas.classList.remove("pressed")
  },100);
}
