const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const cookies = document.getElementById("cookies");
const modalText = document.getElementById("modal-text");

// set time interval for annoying modal to appear
setTimeout(function () {
  modal.style.display = "block";
}, 3000);

// modal close btn function
modalCloseBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// prevent page from reloading
cookies.addEventListener("submit", function (e) {
  e.preventDefault();
  modalText.innerHTML = `
    <div class="modal-inner-loading">
      <img src="img/loading.svg" class="loading">
      <p id="uploadText">
        Uploading your data to the dark web...
      </p>
  </div>`;
});
