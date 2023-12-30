<?php

$order_json = file_get_contents('php://input');
if (!empty($order_json)) {

    $order_data = json_decode($order_json, true);

    $orderCode = $order_data['orderCode'];
    $status = $order_data['status'];
    $sensniaQ = $order_data['items']['sensnia'];
    $ubQ = $order_data['items']['ub'];
    $oaproneQ = $order_data['items']['oaprone'];
    $firstName = $order_data['details']['firstName'];
    $lastName = $order_data['details']['lastName'];
    $address = $order_data['details']['address'];
    $contactNumber = $order_data['details']['contactNumber'];
    $emailAdd = $order_data['details']['emailAdd'];

    $conn = new mysqli('localhost', 'root', '', 'skinabcs');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $stmt = $conn->prepare("INSERT INTO orders SET order_code = ?, status = ?, sensnia_quantity = ?, ub_quantity = ?, oaprone_quantity = ?, first_name = ?, last_name = ?, address = ?, contact_number = ?, email_add = ?");
    $stmt->bind_param("ssiiisssis", $orderCode, $status, $sensniaQ, $ubQ, $oaproneQ, $firstName, $lastName, $address, $contactNumber, $emailAdd);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Order saved successfully!";
    } else {
        echo "Error saving order.";
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Error: No data received.";
}

?>
