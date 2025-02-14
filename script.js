let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
    cart.push({ product: productName, price: price });
    totalPrice += price;

    updateCartDisplay();
}

function updateCartDisplay() {
    const cartList = document.getElementById("cartList");
    const totalPriceElement = document.getElementById("totalPrice");

    cartList.innerHTML = ''; // Clear the list first
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.product + ' - Rp ' + item.price;
        cartList.appendChild(li);
    });

    totalPriceElement.textContent = totalPrice;
}

function checkout() {
    if (cart.length === 0) {
        alert("Keranjang Belanja kosong. Silakan tambahkan produk.");
    } else {
        alert("Terima kasih telah membeli kopi kami! Total Belanja Anda: Rp " + totalPrice);
        // Clear the cart after checkout
        cart = [];
        totalPrice = 0;
        updateCartDisplay();
    }
}
