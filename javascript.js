var clckd=document.getElementsByClassName('btn');
for(var i=0;i<clckd.length;i++){
    document.getElementsByClassName('btn')[i].addEventListener('click',function(){
        animate(this.innerHTML);
    })
}
document.addEventListener('keypress',function(e){
    animate(e.key);
});
function animate(key) {
    key=key.toUpperCase();
    switch (key) {
      case "A":
        var tom2 = new Audio("sounds/tom-1.mp3");
        tom2.play();
        animate_keypress(key);
        break;
      case "W":
        var tom1 = new Audio("sounds/tom-2.mp3");
        tom1.play();
        animate_keypress(key);
        break;
      case "S":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        animate_keypress(key);
        break;
      case "D":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        animate_keypress(key);
        break;
      case "N":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        animate_keypress(key);
        break;
      case "J":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        animate_keypress(key);
        break;
      case "M":
        animate_keypress(key);
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        animate_keypress(key);
        break;
    }
  }
function animate_keypress(Key) {
    var activeButton = document.querySelector("." +Key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
