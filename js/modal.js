const orderButtons = document.querySelectorAll(".order-button");
const modal = document.getElementById("order-modal");
const closeButton = document.querySelector(".close-button");
const modalProductName = document.getElementById("modal-product-name");
const modalProductPrice = document.getElementById("modal-product-price");
const orderForm = document.getElementById("order-form");

orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.dataset.product;
    const price = button.dataset.price;

    modalProductName.textContent = `Product: ${product}`;
    modalProductPrice.textContent = `Price: ${price}`;
    modal.style.display = "block";
  });
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

orderForm.addEventListener("submit", (event) => {
  event.preventDefault();
 
  alert("Order placed!"); 
  modal.style.display = "none";
  orderForm.reset(); 
});
