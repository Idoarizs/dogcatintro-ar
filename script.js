document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector("a-scene")
    .addEventListener("markerFound", function (ev) {
      var markerId = ev.target.id;

      if (markerId === "marker1") {
        document
          .getElementById("keteranganText")
          .setAttribute("value", "Ini adalah kucing.");
        showAudioControl("audioControl1");
        playAudio("penjelasanSound1");
      } else if (markerId === "marker2") {
        document
          .getElementById("keteranganText")
          .setAttribute("value", "Ini adalah anjing.");
        showAudioControl("audioControl2");
        playAudio("penjelasanSound2");
      }
    });

  document
    .querySelector("a-scene")
    .addEventListener("markerLost", function (ev) {
      var markerId = ev.target.id;

      if (markerId === "marker1") {
        stopAudio("penjelasanSound1");
      } else if (markerId === "marker2") {
        stopAudio("penjelasanSound2");
      }
    });

  document
    .getElementById("audioButton1")
    .addEventListener("click", function () {
      toggleAudio("penjelasanSound1", "audioButton1");
    });

  document
    .getElementById("audioButton2")
    .addEventListener("click", function () {
      toggleAudio("penjelasanSound2", "audioButton2");
    });

  function showAudioControl(controlId) {
    hideAllAudioControls();
    var audioControl = document.getElementById(controlId);
    audioControl.setAttribute("visible", "true");
  }

  function hideAllAudioControls() {
    var audioControls = document.querySelectorAll("[id^=audioControl]");
    audioControls.forEach(function (control) {
      control.setAttribute("visible", "false");
    });
  }

  function playAudio(audioId) {
    var audio = document.getElementById(audioId);
    if (!audio.components.sound.isPlaying) {
      audio.components.sound.playSound();
    }
  }

  function stopAudio(audioId) {
    var audio = document.getElementById(audioId);
    if (audio.components.sound.isPlaying) {
      audio.components.sound.stopSound();
    }
  }

  function toggleAudio(audioId, buttonId) {
    var audio = document.getElementById(audioId);
    var button = document.getElementById(buttonId);

    if (audio.components.sound.isPlaying) {
      audio.components.sound.stopSound();
      button.querySelector("a-text").setAttribute("value", "Putar Audio");
      button.setAttribute("color", "blue");
    } else {
      audio.components.sound.playSound();
      button.querySelector("a-text").setAttribute("value", "Berhenti Audio");
      button.setAttribute("color", "green");
    }
  }
});
