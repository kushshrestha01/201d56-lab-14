/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartStorage')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  console.log("THis worked");
  // TODO: Find the table body
  var cartTable = document.getElementById("cart");
  // TODO: Iterate over the items in the cart
  console.log(cart.items[0]);
  for (var i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    var tr = document.createElement("tr");
    
    // TODO: Create a TD for the delete link, quantity,  and the item
    var tdDeleteLink = document.createElement("td");
    var tdQuantity = document.createElement("td");
    var tdItem = document.createElement("td");
    var a = document.createElement("a");

    var aText = document.createTextNode("X");
    var tdQtyText = document.createTextNode(`${ cart.items[i].quantity }`);

    a. setAttribute("href", "#");
    a.appendChild(aText);
    



  }
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
