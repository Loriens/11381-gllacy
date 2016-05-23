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
    if(event.target.classList.contain("label-hide")) {
      event.target.classList.remove("label-hide");
    }
  }
});