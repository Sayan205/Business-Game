// Game Variables
let balance = 1000; // Starting money
let inventory = 0;  // Starting inventory

// Cost of one item to buy and sell price
const itemCost = 100;
const sellPrice = 150;

// DOM Elements
const balanceElement = document.getElementById("balance");
const inventoryElement = document.getElementById("inventory");
const messageElement = document.getElementById("message");

const buyButton = document.getElementById("buy-button");
const sellButton = document.getElementById("sell-button");

// Update the display
function updateDisplay() {
    balanceElement.textContent = balance;
    inventoryElement.textContent = inventory;
}

// Buy Item Function
buyButton.addEventListener("click", () => {
    if (balance >= itemCost) {
        balance -= itemCost;  // Deduct money
        inventory += 1;       // Add item to inventory
        updateDisplay();      // Update display
        messageElement.textContent = "You bought an item!";
    } else {
        messageElement.textContent = "Not enough money to buy an item!";
    }
});

// Sell Item Function
sellButton.addEventListener("click", () => {
    if (inventory > 0) {
        balance += sellPrice;  // Add money
        inventory -= 1;        // Remove item from inventory
        updateDisplay();       // Update display
        messageElement.textContent = "You sold an item!";
    } else {
        messageElement.textContent = "No items in inventory to sell!";
    }
});

// Initial display update
updateDisplay();
