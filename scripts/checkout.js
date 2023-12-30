let a = 0;
let b = 0;
let c = 0;

function sensniaPlus() {
    a++;
    document.getElementById('sensniaQuantity').value = a;
    displayPrice();
    displayItems();
}
function sensniaMinus() {
    document.getElementById('sensniaQuantity').value = a;
    if (a < 0) {
        a = 0;
        displayPrice();
        displayItems();
    } else if (a <= 0) {
        a = 0;
        displayPrice();
        displayItems();
    } else {
        a--;
        displayPrice();
        displayItems();
    }
}

function ubPlus() {
    b++;
    document.getElementById('ubQuantity').value = b;
    displayPrice();
    displayItems();
}

function ubMinus() {
    document.getElementById('ubQuantity').value = b;
    if (b < 0) {
        b = 0;
        displayPrice();
        displayItems();
    } else if (b <= 0) {
        b = 0;
        displayPrice();
        displayItems();
    } else {
        b--;
        displayPrice();
        displayItems();
    }
}

function oapronePlus() {
    c++;
    document.getElementById('oaproneQuantity').value = c;
    displayPrice();
    displayItems();
}

function oaproneMinus() {
    document.getElementById('oaproneQuantity').value = c;
    if (c < 0) {
        c = 0;
        displayPrice();
        displayItems();
    } else if (c <= 0) {
        c = 0;
        displayPrice();
        displayItems();
    } else {
        c--;
        displayPrice();
        displayItems();
    }
}

function displayPrice() {
    var resultText = document.getElementById('total');
    var totalPrice = document.getElementById('totalprice');

    var sensniaQ = parseInt(document.getElementById('sensniaQuantity').value);
    var ubQ = parseInt(document.getElementById('ubQuantity').value);
    var oaproneQ = parseInt(document.getElementById('oaproneQuantity').value);

    var sensniaQuantity = sensniaQ * 255;
    var ubQuantity = ubQ * 480;
    var oaproneQuantity = oaproneQ * 290; 

    var result = sensniaQuantity + ubQuantity + oaproneQuantity;

    resultText.innerText = '₱' + result
    totalPrice.value = '₱' + result

}

function displayItems() {
    var itemsText = document.getElementById('items');
    var sensQuant = document.getElementById('sensiaQ');
    var ubQuant = document.getElementById('ubQ');
    var oaproneQuant = document.getElementById('oaproneQ');

    var sensniaQ = parseInt(document.getElementById('sensniaQuantity').value);
    var ubQ = parseInt(document.getElementById('ubQuantity').value);
    var oaproneQ = parseInt(document.getElementById('oaproneQuantity').value);

    itemTotal = sensniaQ + ubQ + oaproneQ;
    
    sensQuant.value = sensniaQ;
    ubQuant.value = ubQ;
    oaproneQuant.value = oaproneQ;
    itemsText.innerText = itemTotal
}

function showCod() {
    document.getElementById('cod').style.display = 'block';
    document.getElementById('gcash').style.display = 'none';
    document.getElementById('maya').style.display = 'none';

    let paymenttype = document.getElementById('paymenttype');

    paymenttype.value = "cash on delivery"
}

function showGcash() {
    document.getElementById('cod').style.display = 'none';
    document.getElementById('gcash').style.display = 'none';
    document.getElementById('maya').style.display = 'block';


    let paymenttype = document.getElementById('paymenttype');

    paymenttype.value = "e-wallet"
}

function showMaya() {
    document.getElementById('cod').style.display = 'none';
    document.getElementById('gcash').style.display = 'block';
    document.getElementById('maya').style.display = 'none';

    let paymenttype = document.getElementById('paymenttype');

    paymenttype.value = "card"
}

function generateOrderCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const codeLength = 5;
    let orderCode = '';
    
    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderCode += characters.charAt(randomIndex);
    }

    return orderCode;
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const orderID = getParameterByName('orderID');
if (orderID) {
    document.getElementById('orderConfirm').innerText = `Your order #${orderID} is on its way`;
}

function returnHome() {
    window.location.href = 'index.html';
}