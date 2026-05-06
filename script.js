// ============================================================
// script.js — The "Waitstaff" of The Data Bistro
// Loaded by the <script> tag at the bottom of index.html.
//
// HOW JS CONNECTS TO HTML:
//   document.getElementById('some-id')    → finds <... id="some-id">
//   document.querySelectorAll('.some-class') → finds all <... class="some-class">
//
// If the id/class string here doesn't match what's in index.html,
// the returned value is null and nothing happens.
// ============================================================

// Step 1: Find the HTML elements we need to read or update.
// Each string must match the id="..." in index.html exactly.
const itemCountDisplay  = document.getElementById('item-count');   // → id="item-count"
const orderTotalDisplay = document.getElementById('order-total');  // → id="order-total"
const clearBtn          = document.getElementById('clear-btn');    // → id="clear-btn"

// Step 2: Keep a running total in memory (JavaScript variables).
let itemCount  = 0;
let orderTotal = 0;

// Step 3: Find every button with class="add-btn" and listen for clicks.
// querySelectorAll returns a list, so we loop over each one.
document.querySelectorAll('.add-btn').forEach(button => {
  button.addEventListener('click', () => {
    // Read the data-price attribute written in the HTML: data-price="8"
    const price = parseInt(button.dataset.price);

    itemCount++;
    orderTotal += price;

    // Write new values back into the HTML elements so the user sees them.
    itemCountDisplay.textContent  = itemCount;
    orderTotalDisplay.textContent = orderTotal;
  });
});

// Step 4: The clear button resets everything back to zero.
clearBtn.addEventListener('click', () => {
  itemCount  = 0;
  orderTotal = 0;
  itemCountDisplay.textContent  = 0;
  orderTotalDisplay.textContent = 0;
});
