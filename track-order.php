<?php
$conn = new mysqli('localhost', 'root', '', 'skinabcs');

if ($_SERVER["REQUEST_METHOD"] === "GET" && isset($_GET["orderCode"])) {
    $orderCode = $_GET["orderCode"];

    $stmt = $conn->prepare("SELECT * FROM orders WHERE order_code = ?");
    $stmt->bind_param("s", $orderCode);
    
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $data = $result->fetch_assoc();
        
        header('Content-Type: application/json');
        echo json_encode($data);
    } else {
        header('Content-Type: application/json');
        echo json_encode((object)[]);
    }

    $stmt->close();
} else {

    header("HTTP/1.1 400 Bad Request");
    echo json_encode(['error' => 'Invalid request']);
}

$conn->close();
?>
