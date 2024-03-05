
function changeQuantity(button, change) {
    var quantityElement = button.parentNode.querySelector('span');
    var currentQuantity = parseInt(quantityElement.innerText);
    var newQuantity = Math.max(0, currentQuantity + change);
    quantityElement.innerText = newQuantity;

    updateTotalPrice();
}

function updateTotalPrice() {
    var items = document.querySelectorAll('.item');
    var totalPriceElement = document.getElementById('totalPrice');
    var totalPrice = 0;

    items.forEach(function (item) {
        var price = parseInt(item.getAttribute('data-price'));
        var quantity = parseInt(item.querySelector('span').innerText);
        totalPrice += price * quantity;
    });

    totalPriceElement.innerText = '$' + totalPrice.toFixed(2);
}
// Initialize quantities from localStorage on page load
document.addEventListener('DOMContentLoaded', function () {
    // Replace 'gansito', 'uncrustables', 'cheetos', 'takis' with actual item keys
    updateQuantityDisplay('gansito', getQuantity('gansito'));
    updateQuantityDisplay('uncrustables', getQuantity('uncrustables'));
    updateQuantityDisplay('cheetos', getQuantity('cheetos'));
    updateQuantityDisplay('takis', getQuantity('takis'));
    updateTotalPrice();
});

function increaseQuantity(item) {
    updateQuantity(item, 1);
}

function decreaseQuantity(item) {
    updateQuantity(item, -1);
}

function updateQuantity(item, change) {
    var newQuantity = Math.max(0, getQuantity(item) + change);
    setQuantity(item, newQuantity);
    updateQuantityDisplay(item, newQuantity);
    updateTotalPrice();
}

function getQuantity(item) {
    return parseInt(localStorage.getItem(item)) || 0;
}

function setQuantity(item, quantity) {
    localStorage.setItem(item, quantity);
}

function updateQuantityDisplay(item, quantity) {
    document.getElementById(item + 'Quantity').innerText = quantity;
}


// You can call this function to clear the stored quantities (for testing purposes)
function clearStoredQuantities() {
    localStorage.removeItem('gansito');
    localStorage.removeItem('uncrustables');
    localStorage.removeItem('cheetos');
    localStorage.removeItem('takis');
}
window.addEventListener('resize', function () {
    const neonBorder = document.querySelector('.neon-border');
    neonBorder.style.width = window.innerWidth + 'px';
    neonBorder.style.height = window.innerHeight + 'px';
});

// Initial resize to set the dimensions
window.dispatchEvent(new Event('resize'));
