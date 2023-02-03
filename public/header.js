// JavaScript source code
window.addEventListener('load', () => {

        window.addEventListener('scroll', () => {
            var header = document.getElementsByClassName("header");
            var content = document.getElementsByClassName("content")[0];
            var footer = document.getElementsByClassName("footer");
            var finalSpacer = document.getElementsByClassName("finalSpacer");
            var distBetw = document.getElementsByClassName('finalSpacer')[0].offsetTop - window.pageYOffset;
                header[0].classList.add("sticky-top");
                footer[0].classList.add("sticky-bot");

            if (window.pageYOffset >= (content.offsetTop/6)) {
                
                header[0].classList.add("opacity-high");
                //header[0].style.opacity = .5;
            }; if (window.pageYOffset <= (content.offsetTop/6)) {
                header[0].classList.remove("opacity-high");
                

            }; if (distBetw <= (window.innerHeight * 1.025)) {
                //console.log("ding");
                footer[0].classList.add("opacity-high");
                header[0].classList.remove("opacity-high");

            }if (distBetw > (window.innerHeight*1.025)) {
                //console.log("dong");
                footer[0].classList.remove("opacity-high");
            }
                //console.log(content.offsetTop);
                //console.log(distBetw);
                //console.log(pageYOffset);
        });
    
    
    
    
    
});

