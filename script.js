function widthChange() {
    var width = window.innerWidth;
    document.getElementById("display").innerHTML = width;
}

window.onload = widthChange;
window.onresize = widthChange;