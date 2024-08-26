<?php
$conn = new mysqli('localhost', 'root', '', 'skinabcs');

if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["orderCode"]) && isset($_GET["newStatus"])) {
    $orderCode = $_GET["orderCode"];
    $newStatus = $_GET["newStatus"];

    $stmt = $conn->prepare("UPDATE orders SET status = ? WHERE order_code = ?");
    $stmt->bind_param("ss", $newStatus, $orderCode);
    $stmt->execute();
    $stmt->close();

    header('Content-Type: application/json');
    echo json_encode(['success' => true]);
} else {
    header('Content-Type: application/json');
    echo json_encode(['success' => false]);
}
?>
