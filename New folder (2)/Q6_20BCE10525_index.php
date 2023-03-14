<?php
// Start the session
session_start();

// Define our products
$products = array(
    array("name" => "FireBolt", "price" => 2.5),
    array("name" => "PSP 3", "price" => 200),
    array("name" => "book", "price" => 3.0),
    array("name" => "Acer pc", "price" => 40),
    array("name" => "MacBook", "price" => 50),
);

// Check if the user has added anything to their cart
if (!isset($_SESSION['cart'])) {
    $_SESSION['cart'] = array();
}

// Check if the user has added an item to their cart
if (isset($_POST['add_to_cart'])) {
    // Add the product to the cart
    $product_id = $_POST['product_id'];
    $_SESSION['cart'][$product_id] = 1;
}
// Display the products
foreach ($products as $product_id => $product) {
    echo '<form method="post">';
    echo '<h2>' . $product['name'] . '</h2>';
    echo '<p>Price: $' . $product['price'] . '</p>';
    echo '<input type="hidden" name="product_id" value="' . $product_id . '">';
    echo '<input type="submit" name="add_to_cart" value="Add to Cart">';
    echo '</form>';
}
