document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('click', handleClick);
});

function handleClick() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'delete-order.php', true);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);

            document.removeEventListener('click', handleClick);
        }
    };

    xhr.send();
}

function returnHome() {
    window.location.href = 'index.html';
}
