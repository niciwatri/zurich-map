function mouseenterkombo1(){
    document.getElementById("infoLinkgroup").style.opacity = "1";
    document.getElementById("haus").style.opacity = "1";
    document.getElementById("kreisHaus").style.opacity = "0";

}

function onmouseleavekombo1(){
    document.getElementById("infoLinkgroup").style.opacity = "0";
    document.getElementById("haus").style.opacity = "0";
    document.getElementById("kreisHaus").style.opacity = "1";

}

function mouseenterkombo2(){
    document.getElementById("infoBus").style.opacity = "1";
    document.getElementById("bus").style.opacity = "1";
    document.getElementById("kreisBus").style.opacity = "0";

}

function onmouseleavekombo2(){
    document.getElementById("infoBus").style.opacity = "0";
    document.getElementById("bus").style.opacity = "0";
    document.getElementById("kreisBus").style.opacity = "1";

}


function fadeOutEffect() {
    var fadeAlle = document.getElementById("alle");
    var fadeEffect = setInterval(function () {
        if (!fadeAlle.style.opacity) {
            fadeAlle.style.opacity = 1;
        }
        if (fadeAlle.style.opacity > 0) {
            fadeAlle.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 80);
}
document.getElementById("alle").addEventListener('click', fadeOutEffect);