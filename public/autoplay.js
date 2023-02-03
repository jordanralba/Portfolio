// JavaScript source code
let clip = document.querySelector('#spiderAnim');
let hoverStart = 0;
let hoverEnd = 0;
let hoverTime = 0;
let lastHovered = 0;
clip.addEventListener("mouseover", function (e) {
    hoverStart = Date.now();
    lastHovered = hoverStart - hoverEnd;
    console.log(lastHovered);
    clip.setAttribute("controls", "controls")

    if (lastHovered > 5000) {
        clip.currentTime = 0;
    }
    if (hoverTime > 750) {
        clip.removeAttribute('controls');
    }
    clip.onmousemove = function () {
        clip.setAttribute("controls", "controls")
    }
    clip.play();
});
clip.addEventListener("mouseout", function (e) {
    clip.removeAttribute('controls');

    hoverEnd = Date.now();
    hoverTime = hoverEnd - hoverStart;
    console.log(hoverTime);
    clip.pause();

});