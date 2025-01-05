// Add to Cart function
function addToCart(product) {
    // Store the product in localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to checkout page
    window.location.href = 'checkout.html';
}

// Handle form submission on Checkout Page
document.getElementById('orderForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the user's details
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Mock order placement (you can connect to a real backend here)
    console.log('Order placed:', { name, email, address });

    // Redirect to the Thank You page
    window.location.href = 'thankyou.html';
});
