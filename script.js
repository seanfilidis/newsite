function changeColor(color) {
    /* this function changes just the title, could be made simpler
    var title = document.getElementById('title');
    if (color == 'black') {
        title.style.color = 'black';
    } else if (color == 'red') {
        title.style.color = 'red';
    } else if (color == 'blue') {
        title.style.color = 'blue';
    } else if (color == 'green') {
        title.style.color = 'green';
    }*/
    var myBody = document.getElementsByTagName("body");
    if (color == 'black') {
        myBody[0].className = '';
    } else {
        myBody[0].className = color;
    }
}

function scrolllTo(number) {
    document.getElementById(number).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}