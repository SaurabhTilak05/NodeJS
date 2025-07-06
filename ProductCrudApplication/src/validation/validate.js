document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  const nameInput = form.querySelector("input[name='name']");
  const categoryInput = form.querySelector("input[name='category']");
  const priceInput = form.querySelector("input[name='price']");
  const quantityInput = form.querySelector("input[name='quantity']");

  form.addEventListener("submit", function (e) {
    let isValid = true;
    clearErrors();

    const nameValue = nameInput.value.trim();
    const categoryValue = categoryInput.value.trim();
    const priceValue = priceInput.value.trim();
    const quantityValue = quantityInput.value.trim();


    if (nameValue === "") {
      showError(nameInput, "Product name is required.");
      isValid = false;
    } else if (!/^[A-Za-z ]+$/.test(nameValue)) {
      showError(nameInput, "Name must contain only letters.");
      isValid = false;
    }

  
    if (categoryValue === "") {
      showError(categoryInput, "Category is required.");
      isValid = false;
    } else if (!/^[A-Za-z ]+$/.test(categoryValue)) {
      showError(categoryInput, "Category must contain only letters");
      isValid = false;
    }

    
    if (priceValue === "") {
      showError(priceInput, "Price is required.");
      isValid = false;
    } else if (isNaN(priceValue) || Number(priceValue) <= 0) {
      showError(priceInput, "Price must be a positive number.");
      isValid = false;
    }


    if (quantityValue === "") {
      showError(quantityInput, "Quantity is required.");
      isValid = false;
    } else if (!/^[1-9][0-9]*$/.test(quantityValue)) {
      showError(quantityInput, "Quantity must be a positive whole number.");
      isValid = false;
    }

    if (!isValid) {
      e.preventDefault(); 
    }
  });

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "validation-error";
    error.innerText = message;
    input.classList.add("is-invalid");
    input.parentElement.appendChild(error);
  }

  function clearErrors() {
    form.querySelectorAll(".validation-error").forEach(el => el.remove());
    form.querySelectorAll(".is-invalid").forEach(el => el.classList.remove("is-invalid"));
  }
});
