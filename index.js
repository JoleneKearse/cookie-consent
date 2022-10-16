const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const cookies = document.getElementById("cookies");

// set time interval for annoying modal to appear
setTimeout(function () {
  modal.style.display = "block";
}, 3000);

// modal close btn function
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

cookies.addEventListener("submit", function (e) {
  e.preventDefault();
});
