function sendEmail() {
    var form = document.getElementByClass("delivery-details");
    var formData = new FormData(form);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "sendEmail.php", true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            document.getElementById("response").innerHTML = xhr.responseText;
        }
    };

    xhr.send(formData);
}
