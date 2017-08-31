var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 101);
 cart.push({[item] : price});
 console.log(item + " has been added to your cart.");
 return cart;
}

function viewCart() {
  // write your code here
  if(cart.length === 0 ) {
    console.log("Your shopping cart is empty.");
  }
  else {
    var itemAndPrices = [];
    for(var i = 0 ; i < cart.length ; i ++ ){
      var itemAndPrice = cart[i];
      var item = Object.keys(itemAndPrice)[0]
      var price = itemAndPrice[item]
      itemAndPrices.push(item + " at $" + price)
    }
    console.log("In your cart, you have: " + itemAndPrices.join(", ") + ".");
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
