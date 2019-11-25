function changeColor(color) {
    var myBody = document.getElementsByTagName("body");
    if (color == 'black') {
        myBody[0].className = '';
    } else {
        myBody[0].className = color;
    }
}

function scrolllTo(number) {
    var headerOffset = 55;
    var target = document.getElementById(number);
    var bodyRect = document.body.getBoundingClientRect().top;
    var targetRect = target.getBoundingClientRect().top;
    var targetPosition = targetRect - bodyRect;
    var offsetPosition = targetPosition - headerOffset;
    window.scrollTo({
        behavior: 'smooth',
        top: offsetPosition
    });
}

document.addEventListener("scroll", navBg);

function navBg() {
    var depth = window.pageYOffset;
    var navcolor = document.getElementById("topnav");
    var trans = document.getElementById('transparent');
    if (depth < 2) {
        navcolor.className = 'nav-transparent';
        trans.innerHTML = 'Transparent';
    } else {
        navcolor.className = 'nav-colored';
        trans.innerHTML = 'Opaque';
    }
}