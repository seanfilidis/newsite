function changeColor(color) {
    var myBody = document.getElementsByTagName("body");
    if (color == 'black') {
        myBody[0].className = '';
    } else {
        myBody[0].className = color;
    }
}

function scrolllTo(number) { // Scrolls on click taking into account the sticky top nav offset
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
    requestAnimationFrame(navBg);
}
// document.addEventListener("scroll", navBg); // Old way
requestAnimationFrame(navBg); // Browser optimized way to call navBG


var scrolling = window.requestAnimationFrame;

var elemsToFadeIn = document.querySelectorAll('.show-on-scroll'); // creates an array

elemsToFadeIn.forEach(myFunction); // runs myFunction on every array item

function myFunction(item) {
    if (isElementInViewport(item)) {
        item.classList.add('is-visible');
        item.style.color = "red";
    } else {
        item.classList.remove('is-visible');
    }
    scrolling(myFunction);
}



function isElementInViewport(el) { //don't understand this yet
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
  }