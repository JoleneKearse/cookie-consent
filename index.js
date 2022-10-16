const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");

// set time interval for annoying modal to appear
setTimeout(function () {
  modal.style.display = "block";
}, 3000);

// modal close btn function
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
