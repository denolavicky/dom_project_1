// SELECT EVERYTHING
const plusBtns = document.querySelectorAll(".fa-plus-circle");
const minusBtns = document.querySelectorAll(".fa-minus-circle");
const deleteBtns = document.querySelectorAll(".fa-trash-alt");
const likeBtns = document.querySelectorAll(".fa-heart");
const total = document.querySelector(".total");

// FUNCTION TO UPDATE TOTAL PRICE
function updateTotal() {
  let sum = 0;

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const price = parseInt(card.querySelector(".unit-price").textContent);
    const quantity = parseInt(card.querySelector(".quantity").textContent);

    sum += price * quantity;
  });

  total.textContent = sum + " $";
}

// INCREASE QUANTITY
plusBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const quantitySpan = this.nextElementSibling;
    quantitySpan.textContent++;

    updateTotal();
  });
});

// DECREASE QUANTITY
minusBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const quantitySpan = this.previousElementSibling;

    if (quantitySpan.textContent > 0) {
      quantitySpan.textContent--;
    }

    updateTotal();
  });
});

// DELETE ITEM
deleteBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    const cardBody = this.closest(".card-body");
    cardBody.remove();

    updateTotal();
  });
});

// LIKE ITEM
likeBtns.forEach(btn => {
  btn.addEventListener("click", function () {
    this.classList.toggle("text-danger");
  });
});