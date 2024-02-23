let cartQuantity = 0;

function showQuantity() {
    console.log('Cart quantity: ' + cartQuantity);
}

function addToCart() {
    cartQuantity++;
    console.log('Cart quantity: ' + cartQuantity);
}

function addToCartByTwo() {
    cartQuantity += 2;
    console.log('Cart quantity: ' + cartQuantity);
}

function addToCartByThree() {
    cartQuantity += 3;
    console.log('Cart quantity: ' + cartQuantity);
}

function resetCart() {
    cartQuantity = 0;
    console.log('Cart was reset');
    console.log('Cart quantity: ' + cartQuantity);
}
