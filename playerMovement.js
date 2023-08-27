AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Add the condition to play sound
        if (e.key==='w'||e.key==='a'||e.key==='s'||e.key==='d'){
          var step = document.querySelector("#sound2")
          step.components.sound.playSound()
        }



      });
    },
  });


  