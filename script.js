function changeColor(color) {
    var title = document.getElementById('title');
    if (title.style.color == color) {
        title.style.color = 'black';
    } else if (color == 'red') {
        title.style.color = 'red';
    } else if (color == 'blue') {
        title.style.color = 'blue';
    } else if (color == 'green') {
        title.style.color = 'green';
    }
}
