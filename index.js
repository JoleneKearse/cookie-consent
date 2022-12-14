const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consentForm");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("declineBtn");
const modalChoiceBtns = document.getElementById("modal-choice-btns");

// toggle reverse class on buttons to annoy user
declineBtn.addEventListener("mouseenter", function () {
  modalChoiceBtns.classList.toggle("reverse");
});

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
  // create form object
  const consentFormData = new FormData(consentForm);
  const name = consentFormData.get("fullName");
  // add loader after submit
  modalText.innerHTML = `
    <div class="modal-inner-loading">
      <img src="img/loading.svg" class="loading">
      <p id="uploadText">
        Uploading your data to the dark web...
      </p>
  </div>`;
  setTimeout(function () {
    document.getElementById("uploadText").textContent = "Making the sale...";
  }, 1500);
  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
      <h2>Thanks you, <span class="modal-display-name">${name}</span>, AKA sucker! </h2>
      <p>We just sold the rights to your eternal soul.</p>
      <div class="idiot-gif">
          <img src="img/pirate.gif">
      </div>
    `;
    modalCloseBtn.disabled = false;
  }, 3000);
});
