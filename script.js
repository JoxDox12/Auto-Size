function widthChange() {
    var width = window.innerWidth;
    document.getElementById("displaywidth").innerHTML = width;
    heightChange();
}

function heightChange() {
    var height = window.innerHeight;
    document.getElementById("displayheight").innerHTML = height;
}

window.onload = widthChange;
window.onresize =  widthChange;