<?php
$orderCode = $_GET['orderCode'];

if (!empty($orderCode)) {
    $conn = new mysqli('localhost', 'root', '', 'skinabcs');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("DELETE FROM orders WHERE order_code = ?");
    $stmt->bind_param("s", $orderCode);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Order not found or could not be deleted.']);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Error: No order code received.']);
}
?>
