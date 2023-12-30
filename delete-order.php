<?php
$conn = new mysqli('localhost', 'root', '', 'skinabcs');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$stmt = $conn->prepare("DELETE FROM orders ORDER BY id DESC LIMIT 1");
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo "Order deleted successfully.";
} else {
    echo "Error deleting order.";
}

$stmt->close();
$conn->close();
?>
