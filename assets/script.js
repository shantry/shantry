document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#fade-in-content").style.opacity = 1;
});

const popupButton = document.getElementById("popup-button");
const popupContent = document.getElementById("popup-content");
const closeButton = document.getElementById("close-button");

popupButton.addEventListener("click", function() {
  popupContent.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popupContent.style.display = "none";
});

const trigger = document.getElementById("container");
trigger.addEventListener("click", (event) => {
	trigger.classList.add("clicked");
	trigger.classList.toggle("active");
});
