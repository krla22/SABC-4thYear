document.addEventListener('DOMContentLoaded', function () {
    displayOrderDetails();
});

function trackOrder() {

    const orderIDInput = document.getElementById('orderIDInput');
    const orderCode = orderIDInput.value.trim();


    fetch('orders.json')
        .then(response => response.json())
        .then(orders => {
            
            const order = orders.find(o => o.orderCode === orderCode);

            
            const orderDetailsContainer = document.getElementById('orderDetailsContainer');
            orderDetailsContainer.innerHTML = ''; 

            if (order) {
                const orderDetailsDiv = document.createElement('div');
                orderDetailsDiv.innerHTML = `
                    <h3>Your Order ${order.orderCode} Status:</h3>
                    <p>${order.status}</p>
                    <h4>Items:</h4>
                    <ul>
                        <li>Sensnia: ${order.items.sensnia}</li>
                        <li>Ub: ${order.items.ub}</li>
                        <li>Oaprone: ${order.items.oaprone}</li>
                        <!-- Add more items if needed -->
                    </ul>
                    <h4>Delivery Address:</h4>
                    <p>${order.details.address}</p>
                    <h4>Contact Number:</h4>
                    <p>${order.details.contactNumber}</p>
                `;

                orderDetailsContainer.appendChild(orderDetailsDiv);
            } else {
                
                const errorMessageDiv = document.createElement('div');
                errorMessageDiv.innerHTML = '<p>Order not found. Please check your order ID.</p>';
                orderDetailsContainer.appendChild(errorMessageDiv);
            }
        })
        .catch(error => {
            console.error('Error fetching orders:', error);
        });
}
