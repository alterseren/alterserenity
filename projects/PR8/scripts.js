let cart = [];

function addToCart(productName, productPrice) {
    const product = {
        name: productName,
        price: productPrice
    };
    
    cart.push(product);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

function toggleCart() {
    alert("Кошик: " + cart.map(item => item.name).join(", "));
}
