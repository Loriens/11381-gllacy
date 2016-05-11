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