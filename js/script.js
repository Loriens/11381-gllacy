var feedback = document.querySelector(".feedback");
var overlay = document.querySelector(".overlay-feedback");
var feedbackOpen = document.querySelector(".index-map-information a:first-of-type");
var feedbackClose = feedback.querySelector(".feedback-close");

feedbackOpen.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("feedback-hide");
  overlay.classList.remove("overlay-feedback-hide");
  feedback.classList.add("feedback-show");
  overlay.classList.add("overlay-feedback-show");
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedback.classList.remove("feedback-show");
  overlay.classList.remove("overlay-feedback-show");
  feedback.classList.add("feedback-hide");
  overlay.classList.add("overlay-feedback-hide");
});


var inputs = document.querySelectorAll("input[type='text'], input[type='email'], input[type='password']");
var textarea = document.querySelector("textarea");

for (var i = 0; i < inputs.length; i ++) {
  inputs[i].addEventListener("keyup", function(event) {
    if(event.target.value) {
      event.target.classList.add("label-hide");
    } else {
      event.target.classList.remove("label-hide");
    }
  });
}

textarea.addEventListener("keyup", function(event) {
  if(event.target.value) {
    event.target.classList.add("label-hide");
  } else {
    event.target.classList.remove("label-hide");
  }
});