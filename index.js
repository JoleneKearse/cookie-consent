const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consentForm");
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
consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // add loader after submit
  modalText.innerHTML = `
    <div class="modal-inner-loading">
      <img src="img/loading.svg" class="loading">
      <p id="uploadText">
        Uploading your data to the dark web...
      </p>
  </div>`;
  const uploadText = document.getElementById("uploadText");
  setTimeout(function () {
    uploadText.innerText = "Making the sale...";
  }, 1500);
});
