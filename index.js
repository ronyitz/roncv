function load(){

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        document.getElementById("home").style.height = window.screen.availHeight+"px";
        document.getElementsByClassName("centered")[0].style.top = window.screen.availHeight*0.5+"px";
        document.getElementsByClassName("centered")[0].style.fontSize = "30px";
        document.body.removeAttribute("style");
        document.body.style.fontFamily = "Arial";
    }else{
        document.body.removeAttribute("style");
    }
}


function homeNav(){
    $('html,body').animate({
        scrollTop: $("body").offset().top},
        'slow');
}


function aboutNav(){
    $('html,body').animate({
        scrollTop: $("#about").offset().top},
        'slow');
}

function experienceNav(){
    $('html,body').animate({
        scrollTop: $("#experience").offset().top},
        'slow');
}


function contactNav(){
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
}

function tolinkedin(){
    location.replace('https://www.linkedin.com/in/ron-yitzhak1990');
}
