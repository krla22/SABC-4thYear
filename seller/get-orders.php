<?php
$conn = new mysqli('localhost', 'root', '', 'skinabcs');

$result = $conn->query("SELECT * FROM orders");

$orders = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $orders[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($orders);

$conn->close();
?>
