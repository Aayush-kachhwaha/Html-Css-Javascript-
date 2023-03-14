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
// Display the cart
if (count($_SESSION['cart']) > 0) {
    echo '<table>';
    echo '<tr><th>Name</th><th>Price</th><th>Quantity</th><th>Total</th></tr>';
    $total = 0;
    foreach ($_SESSION['cart'] as $product_id => $quantity) {
        $product = $products[$product_id];
        $subtotal = $product['price'] * $quantity;
        $total += $subtotal;
        echo '<tr>';
        echo '<td>' . $product['name'] . '</td>';
        echo '<td>$' . $product['price'] . '</td>';
        echo '<td>' . $quantity . '</td>';
        echo '<td>$' . $subtotal . '</td>';
        echo '</tr>';
    }
    echo '<tr><td colspan="3">Total</td><td>$' . $total . '</td></tr>';
    echo '</table>';
} else {
    echo 'Your cart is empty.';
}
?>
