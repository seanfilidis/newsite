function changeColor(color) {
    var myBody = document.getElementsByTagName("body");
    if (color == 'black') {
        myBody[0].className = '';
    } else {
        myBody[0].className = color;
    }
}

function scrolllTo(number) { // Scrolls to a location taking into account the sticky header
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

function navBg() { // Does stuff depending how far down the page you scroll
    var depth = window.pageYOffset;
    var navcolor = document.getElementById("topnav");
    var trans = document.getElementById('transparent');
    var scrollIndicator = document.getElementById('scroll-indicator');
    var backToTop = document.getElementById('back-to-top');
    if (depth < 2) {
        navcolor.className = 'nav-transparent';
        trans.innerHTML = 'Transparent';
        scrollIndicator.style.opacity = 1;
    } else {
        navcolor.className = 'nav-colored';
        trans.innerHTML = 'Opaque';
        scrollIndicator.style.opacity = 0;
    }
    if (depth < 650) {
        backToTop.style.display = 'none';
    } else {
        backToTop.style.display = 'inline';
    }
}
