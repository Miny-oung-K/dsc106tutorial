const itemCountDisplay  = document.getElementById('item-count');

/* BUG 2: The id here is 'orderTotal' but the HTML element has id="order-total".
   getElementById returns null, so the total display is never updated. */
const orderTotalDisplay = document.getElementById('orderTotal');

/* BUG 3: The id here is 'resetBtn' but the HTML element has id="clear-btn".
   getElementById returns null, so the clear button never does anything. */
const clearBtn          = document.getElementById('resetBtn');

let itemCount  = 0;
let orderTotal = 0;

document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    const price = parseInt(button.dataset.price);

    itemCount++;
    orderTotal += price;

    itemCountDisplay.textContent = itemCount;

    if (orderTotalDisplay) {
      orderTotalDisplay.textContent = orderTotal;
    }
  });
});

if (clearBtn) {
  clearBtn.addEventListener('click', () => {
    itemCount  = 0;
    orderTotal = 0;
    itemCountDisplay.textContent = 0;
    if (orderTotalDisplay) orderTotalDisplay.textContent = 0;
  });
}
