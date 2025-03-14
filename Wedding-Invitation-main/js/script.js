/**
 * /**
 * @author Untoldcoding <mooduswamy@gmail.com>
 */
(function ($) {
  "use strict";
  $(".untoldcoding-falling").sakura("start", {
    blowAnimations: ["blow-soft-left"],
    className: "sakura",
    fallSpeed: 2.5,
    maxSize: 12,
    minSize: 9,
    newOn: 250,
  });
})(jQuery);

// Play audio on click
$(document).on("click", function () {
  const audio = document.getElementById("my_audio");
  if (audio) {
    audio.play();
    console.log("Shaadi me zaroor aana");
  }
});

// Pause audio function
function pauseAudio(event) {
  const audio = document.getElementById("my_audio");
  if (audio) {
    audio.pause();
    console.log("Shaadi me pakka aana");
    event.stopPropagation(); // Ensure the event is properly referenced
  }
}

// Countdown timer
var countDownDate = new Date("October 20, 2024 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="time"
  document.getElementById("time").innerHTML =
    "<div class='container'>" +
    "<div class='days block'>" + days + "<br>Days</div>" +
    "<div class='hours block'>" + hours + "<br>Hours</div>" +
    "<div class='minutes block'>" + minutes + "<br>Minutes</div>" +
    "<div class='seconds block'>" + seconds + "<br>Seconds</div>" +
    "</div>";

  // Check if countdown is finished
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Wedding Completed !!";
  }
}, 1000);

// Styling for console logs
var styles = [
  "background: linear-gradient(#D33106, #571402)",
  "border: 1px solid red",
  "color: white",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "line-height: 40px",
  "text-align: center",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

console.log("%c SAVE THE DATE:  20th October, 2024 ", styles);
