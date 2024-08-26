<?php
$orderCode = $_GET['orderCode'];

if (!empty($orderCode)) {
    $conn = new mysqli('localhost', 'root', '', 'skinabcs');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("SELECT * FROM orders WHERE order_code = ?");
    $stmt->bind_param("s", $orderCode);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $orderData = $result->fetch_assoc();
        echo json_encode(['success' => true, 'orderData' => $orderData]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Order not found.']);
    }

    $stmt->close();
    $conn->close();
} else {
    echo json_encode(['success' => false, 'message' => 'Error: No order code received.']);
}
?>
