function changeColor(color) { // Color toggle
    var myBody = document.getElementsByTagName("body");
    if (color == 'black') {
        myBody[0].className = '';
    } else {
        myBody[0].className = color;
    }
}

document.querySelectorAll('.smooth-scroll').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        var regex = /#([^#,.+]*)/gm;
        var href = item.getAttribute('href');
        var subs = '$1';
        result = href.replace(regex, subs);
        console.log(result);
        scrolllTo(result);
    });
});


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



function navBg() { // Transparent topnav, scroll indicator, back to top button
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
// Old way: document.addEventListener("scroll", navBg); 
requestAnimationFrame(navBg); // Browser optimized way to call navBG



// This block handles animations on page elements
var scrolling = window.requestAnimationFrame;
var elemsToFadeIn = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li'); // creates an array
function myLoop() {
    elemsToFadeIn.forEach(function (item) { // runs myFunction on every array item
        if (isElementInViewport(item)) {
            item.classList.add('is-visible');
        } else {
            item.classList.remove('is-visible');
        }
    });
    scrolling(myLoop);
}
myLoop(); // Call it once and it will keep looping on scroll events
function isElementInViewport(el) { 
    var rect = el.getBoundingClientRect(); // From stackoverflow. Returns true or false.
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