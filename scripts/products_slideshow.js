let currentDiv = 1;

function showDiv(direction) {
    const container = document.querySelector('.serums-container');
    const totalDivs = document.querySelectorAll('.serums-container > div').length;

    currentDiv += direction;

    if (currentDiv < 1) {
        currentDiv = 1;
    } else if (currentDiv > totalDivs) {
        currentDiv = totalDivs;
    }

    const transformValue = -(currentDiv - 1) * 33.4;
    container.style.transform = `translateX(${transformValue}%)`;
}

function changeImg1() {
  document.getElementById("sensnia-img").src = "images/sensnia-serum-1.jpg";
}

function changeImg2() {
  document.getElementById("sensnia-img").src = "images/sensnia-serum-2.jpg";
}

function changeImg3() {
  document.getElementById("sensnia-img").src = "images/sensnia-serum-info.jpg";
}

function changeImg4() {
  document.getElementById("ub-img").src = "images/ub-serum-1.jpg";
}

function changeImg5() {
  document.getElementById("ub-img").src = "images/ub-serum-2.jpg";
}

function changeImg6() {
  document.getElementById("ub-img").src = "images/ub-serum-info.jpg";
}

function changeImg7() {
  document.getElementById("sensoa-img").src = "images/oaprone-serum-1.jpg";
}

function changeImg8() {
  document.getElementById("sensoa-img").src = "images/oaprone-serum-2.jpg";
}

function changeImg9() {
  document.getElementById("sensoa-img").src = "images/oaprone--serum-info.jpg";
}

